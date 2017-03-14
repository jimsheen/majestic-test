Components.ProductList = function() {

    var context = $('#productsList');

    var nodes = {};

    var Products = {};

    var returnPromise = function() {
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
            Products = data.Products;
            $.each(Products, function(k, v) {
                console.log(Products);
                context.append(productTemplate(Products[k]));
            })
        })
    };

    var setUpEvents = function() {
       
        nodes.$addToBasketBtn.on('click tap', function(e){
            var ID = $(this).parents().data('id');
            // add event to obj
            Products[ID].event = 'add';
           Global.Basket.updateBasket(Products[ID]);
        });
        nodes.$removeFromBasketBtn.on('click tap', function(e){
            var ID = $(this).parents().data('id');
            // add event to obj
            Products[ID].event = 'remove';
           Global.Basket.updateBasket(Products[ID]);
        }); 
    }

    setUpList();

    return {
        nodes: nodes
    }
}

// function alias for basket function only gets called once for some reason? 
Components.ProductList = Components.ProductList();
