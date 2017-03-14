Components.ProductList = (function() {

    var context = $('#productsList');

    var nodes = {};

    var Products = {};

    var returnPromise = function() {
        console.log('what');
        return $.ajax({
            url: "/testJson.json"
        })
    };

    var productTemplate = function(product) {

        nodes.$addToBasketBtn = $('<button class="addToBasket">Add to Basket</button>');
        nodes.$removeFromBasketBtn = $('<button class="removeFromBasket">Remove From Basket</button>');

        var productName = '<h3 class="name">' + product.name + '</h3>';
        var productPrice = '<p class="price">' + product.price + '</p>';
        var addToBasketBtn = nodes.$addToBasketBtn;

        var template = productName + productPrice;

        setUpEvents();

        return $('<div>', {
            'class': 'test',
            'data-id': product.id
        }).append(template).append(nodes.$addToBasketBtn).append(nodes.$removeFromBasketBtn);
    }


    var setUpList = function() {
        returnPromise().done(function(data) {
            Products = data;
            console.log(Products);
            $.each(Products, function(k, v) {
                context.append(productTemplate(Products[k]));
            })
        })
        returnPromise().error(function(err) {
            console.log(err);
        })
    };

    var setUpEvents = function() {

        function filter(ID) {
            return $.grep(Products, function(e) {
                return e.id == ID; });
        }

        nodes.$addToBasketBtn.on('click tap', function(e) {
            var ID = $(this).parents().data('id');

            var result = filter(ID);

            result.event = 'ADD_PRODUCT_TO_BASKET';
            console.log(result);
        });
        nodes.$removeFromBasketBtn.on('click tap', function(e) {
            var ID = $(this).parents().data('id');

            var result = filter(ID);

            result.event = 'REMOVE_PRODUCT_FROM_BASKET';
            console.log(result);
        });
    }


    setUpList();

})()
