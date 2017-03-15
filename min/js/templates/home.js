Components.SimpleSlider = function() {
    var config = {
        test: 'test'
    };
    var newSlider = function(options) {


        this.options = $.extend({}, config, options);

        console.log(this.options);

        this.init();
    };

    var proto = newSlider.prototype;

    proto.init = function() {

        console.log('init');
       

    };

   
    return {
        newSlider: newSlider
    }
}  

Components.SimpleSlider = Components.SimpleSlider();


Components.ajaxBlogPosts = function() {

    getPosts = function() {

        return $.ajax({
            url: 'http://public-api.wordpress.com/rest/v1/sites/en.blog.wordpress.com/posts/?number=1&callback=?'
        });
       
    }

    handleData = function(data) {
        console.log(data);
    }

   getPosts().done(function(data) {
        handleData(data);
   })


}

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

;(function() {

    var homeSlider = new Components.SimpleSlider.newSlider({
        test: 'home slider'
    })

    Components.ajaxBlogPosts();

})();


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzL2NvbXBvbmVudHMvc2xpZGVyLmpzIiwianMvY29tcG9uZW50cy9hamF4QmxvZ1Bvc3RzLmpzIiwianMvY29tcG9uZW50cy9wcm9kdWN0TGlzdC5qcyIsImpzL3RlbXBsYXRlcy9ob21lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzdFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImhvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJDb21wb25lbnRzLlNpbXBsZVNsaWRlciA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBjb25maWcgPSB7XG4gICAgICAgIHRlc3Q6ICd0ZXN0J1xuICAgIH07XG4gICAgdmFyIG5ld1NsaWRlciA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcblxuXG4gICAgICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBjb25maWcsIG9wdGlvbnMpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMub3B0aW9ucyk7XG5cbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfTtcblxuICAgIHZhciBwcm90byA9IG5ld1NsaWRlci5wcm90b3R5cGU7XG5cbiAgICBwcm90by5pbml0ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgY29uc29sZS5sb2coJ2luaXQnKTtcbiAgICAgICBcblxuICAgIH07XG5cbiAgIFxuICAgIHJldHVybiB7XG4gICAgICAgIG5ld1NsaWRlcjogbmV3U2xpZGVyXG4gICAgfVxufSAgXG5cbkNvbXBvbmVudHMuU2ltcGxlU2xpZGVyID0gQ29tcG9uZW50cy5TaW1wbGVTbGlkZXIoKTtcblxuIiwiQ29tcG9uZW50cy5hamF4QmxvZ1Bvc3RzID0gZnVuY3Rpb24oKSB7XG5cbiAgICBnZXRQb3N0cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHJldHVybiAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiAnaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzL2VuLmJsb2cud29yZHByZXNzLmNvbS9wb3N0cy8/bnVtYmVyPTEmY2FsbGJhY2s9PydcbiAgICAgICAgfSk7XG4gICAgICAgXG4gICAgfVxuXG4gICAgaGFuZGxlRGF0YSA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgfVxuXG4gICBnZXRQb3N0cygpLmRvbmUoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICBoYW5kbGVEYXRhKGRhdGEpO1xuICAgfSlcblxuXG59XG4iLCJDb21wb25lbnRzLlByb2R1Y3RMaXN0ID0gKGZ1bmN0aW9uKCkge1xuXG4gICAgdmFyIGNvbnRleHQgPSAkKCcjcHJvZHVjdHNMaXN0Jyk7XG5cbiAgICB2YXIgbm9kZXMgPSB7fTtcblxuICAgIHZhciBQcm9kdWN0cyA9IHt9O1xuXG4gICAgdmFyIHJldHVyblByb21pc2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3doYXQnKTtcbiAgICAgICAgcmV0dXJuICQuYWpheCh7XG4gICAgICAgICAgICB1cmw6IFwiL3Rlc3RKc29uLmpzb25cIlxuICAgICAgICB9KVxuICAgIH07XG5cbiAgICB2YXIgcHJvZHVjdFRlbXBsYXRlID0gZnVuY3Rpb24ocHJvZHVjdCkge1xuXG4gICAgICAgIG5vZGVzLiRhZGRUb0Jhc2tldEJ0biA9ICQoJzxidXR0b24gY2xhc3M9XCJhZGRUb0Jhc2tldFwiPkFkZCB0byBCYXNrZXQ8L2J1dHRvbj4nKTtcbiAgICAgICAgbm9kZXMuJHJlbW92ZUZyb21CYXNrZXRCdG4gPSAkKCc8YnV0dG9uIGNsYXNzPVwicmVtb3ZlRnJvbUJhc2tldFwiPlJlbW92ZSBGcm9tIEJhc2tldDwvYnV0dG9uPicpO1xuXG4gICAgICAgIHZhciBwcm9kdWN0TmFtZSA9ICc8aDMgY2xhc3M9XCJuYW1lXCI+JyArIHByb2R1Y3QubmFtZSArICc8L2gzPic7XG4gICAgICAgIHZhciBwcm9kdWN0UHJpY2UgPSAnPHAgY2xhc3M9XCJwcmljZVwiPicgKyBwcm9kdWN0LnByaWNlICsgJzwvcD4nO1xuICAgICAgICB2YXIgYWRkVG9CYXNrZXRCdG4gPSBub2Rlcy4kYWRkVG9CYXNrZXRCdG47XG5cbiAgICAgICAgdmFyIHRlbXBsYXRlID0gcHJvZHVjdE5hbWUgKyBwcm9kdWN0UHJpY2U7XG5cbiAgICAgICAgc2V0VXBFdmVudHMoKTtcblxuICAgICAgICByZXR1cm4gJCgnPGRpdj4nLCB7XG4gICAgICAgICAgICAnY2xhc3MnOiAndGVzdCcsXG4gICAgICAgICAgICAnZGF0YS1pZCc6IHByb2R1Y3QuaWRcbiAgICAgICAgfSkuYXBwZW5kKHRlbXBsYXRlKS5hcHBlbmQobm9kZXMuJGFkZFRvQmFza2V0QnRuKS5hcHBlbmQobm9kZXMuJHJlbW92ZUZyb21CYXNrZXRCdG4pO1xuICAgIH1cblxuXG4gICAgdmFyIHNldFVwTGlzdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm5Qcm9taXNlKCkuZG9uZShmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICBQcm9kdWN0cyA9IGRhdGE7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhQcm9kdWN0cyk7XG4gICAgICAgICAgICAkLmVhY2goUHJvZHVjdHMsIGZ1bmN0aW9uKGssIHYpIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmFwcGVuZChwcm9kdWN0VGVtcGxhdGUoUHJvZHVjdHNba10pKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVyblByb21pc2UoKS5lcnJvcihmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgIH0pXG4gICAgfTtcblxuICAgIHZhciBzZXRVcEV2ZW50cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIGZ1bmN0aW9uIGZpbHRlcihJRCkge1xuICAgICAgICAgICAgcmV0dXJuICQuZ3JlcChQcm9kdWN0cywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlLmlkID09IElEOyB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIG5vZGVzLiRhZGRUb0Jhc2tldEJ0bi5vbignY2xpY2sgdGFwJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgdmFyIElEID0gJCh0aGlzKS5wYXJlbnRzKCkuZGF0YSgnaWQnKTtcblxuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGZpbHRlcihJRCk7XG5cbiAgICAgICAgICAgIHJlc3VsdC5ldmVudCA9ICdBRERfUFJPRFVDVF9UT19CQVNLRVQnO1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgICAgfSk7XG4gICAgICAgIG5vZGVzLiRyZW1vdmVGcm9tQmFza2V0QnRuLm9uKCdjbGljayB0YXAnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICB2YXIgSUQgPSAkKHRoaXMpLnBhcmVudHMoKS5kYXRhKCdpZCcpO1xuXG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gZmlsdGVyKElEKTtcblxuICAgICAgICAgICAgcmVzdWx0LmV2ZW50ID0gJ1JFTU9WRV9QUk9EVUNUX0ZST01fQkFTS0VUJztcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgc2V0VXBMaXN0KCk7XG5cbn0pKClcbiIsIjsoZnVuY3Rpb24oKSB7XG5cbiAgICB2YXIgaG9tZVNsaWRlciA9IG5ldyBDb21wb25lbnRzLlNpbXBsZVNsaWRlci5uZXdTbGlkZXIoe1xuICAgICAgICB0ZXN0OiAnaG9tZSBzbGlkZXInXG4gICAgfSlcblxuICAgIENvbXBvbmVudHMuYWpheEJsb2dQb3N0cygpO1xuXG59KSgpO1xuXG4iXX0=
