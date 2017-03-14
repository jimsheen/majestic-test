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


Components.Accordion = function() {
    var defaults = {
        test: 'test'
    };
    this.newAccordion = function() {
        console.log('new accordion');
    }
}

Components.ajaxBlogPosts = function() {

    var _self = this;
    getPosts = function() {

        var posts = {};
        $(function() {
            $.getJSON('http://public-api.wordpress.com/rest/v1/sites/en.blog.wordpress.com/posts/?number=1&callback=?')
                .success(function(response) {

                  returnData(response);

                });
        })

       
    }

    function blogPosts() {
       getPosts();
    }

    function returnData(data) {
        return data;
    }

    return {
        blogPosts : blogPosts
    }
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

Templates.Home = {};

Templates.Home.events = (function() {
    console.log('events');
})();

Templates.Home.setupComponents = (function() {
    // new slider
    // var slider = new Components.SimpleSlider;
    // slider.newSlider({
    //     test: 'testingngn'
    // });

    


    var homeSlider = new Components.SimpleSlider.newSlider({
        test: 'home slider'
    })

    // new accordion
    var accordion = new Components.Accordion;
    accordion.newAccordion();

    console.log(accordion);

    Components.ajaxBlogPosts().blogPosts();


})();


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzL2NvbXBvbmVudHMvc2xpZGVyLmpzIiwianMvY29tcG9uZW50cy9hY2NvcmRpb24uanMiLCJqcy9jb21wb25lbnRzL2FqYXhCbG9nUG9zdHMuanMiLCJqcy9jb21wb25lbnRzL3Byb2R1Y3RMaXN0LmpzIiwianMvdGVtcGxhdGVzL2hvbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM3RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJob21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiQ29tcG9uZW50cy5TaW1wbGVTbGlkZXIgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgY29uZmlnID0ge1xuICAgICAgICB0ZXN0OiAndGVzdCdcbiAgICB9O1xuICAgIHZhciBuZXdTbGlkZXIgPSBmdW5jdGlvbihvcHRpb25zKSB7XG5cblxuICAgICAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgY29uZmlnLCBvcHRpb25zKTtcblxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm9wdGlvbnMpO1xuXG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH07XG5cbiAgICB2YXIgcHJvdG8gPSBuZXdTbGlkZXIucHJvdG90eXBlO1xuXG4gICAgcHJvdG8uaW5pdCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdpbml0Jyk7XG4gICAgICAgXG5cbiAgICB9O1xuXG4gICBcbiAgICByZXR1cm4ge1xuICAgICAgICBuZXdTbGlkZXI6IG5ld1NsaWRlclxuICAgIH1cbn0gIFxuXG5Db21wb25lbnRzLlNpbXBsZVNsaWRlciA9IENvbXBvbmVudHMuU2ltcGxlU2xpZGVyKCk7XG5cbiIsIkNvbXBvbmVudHMuQWNjb3JkaW9uID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGRlZmF1bHRzID0ge1xuICAgICAgICB0ZXN0OiAndGVzdCdcbiAgICB9O1xuICAgIHRoaXMubmV3QWNjb3JkaW9uID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCduZXcgYWNjb3JkaW9uJyk7XG4gICAgfVxufVxuIiwiQ29tcG9uZW50cy5hamF4QmxvZ1Bvc3RzID0gZnVuY3Rpb24oKSB7XG5cbiAgICB2YXIgX3NlbGYgPSB0aGlzO1xuICAgIGdldFBvc3RzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIHBvc3RzID0ge307XG4gICAgICAgICQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkLmdldEpTT04oJ2h0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy9lbi5ibG9nLndvcmRwcmVzcy5jb20vcG9zdHMvP251bWJlcj0xJmNhbGxiYWNrPT8nKVxuICAgICAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG5cbiAgICAgICAgICAgICAgICAgIHJldHVybkRhdGEocmVzcG9uc2UpO1xuXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG5cbiAgICAgICBcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBibG9nUG9zdHMoKSB7XG4gICAgICAgZ2V0UG9zdHMoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXR1cm5EYXRhKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYmxvZ1Bvc3RzIDogYmxvZ1Bvc3RzXG4gICAgfVxufVxuIiwiQ29tcG9uZW50cy5Qcm9kdWN0TGlzdCA9IChmdW5jdGlvbigpIHtcblxuICAgIHZhciBjb250ZXh0ID0gJCgnI3Byb2R1Y3RzTGlzdCcpO1xuXG4gICAgdmFyIG5vZGVzID0ge307XG5cbiAgICB2YXIgUHJvZHVjdHMgPSB7fTtcblxuICAgIHZhciByZXR1cm5Qcm9taXNlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd3aGF0Jyk7XG4gICAgICAgIHJldHVybiAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiBcIi90ZXN0SnNvbi5qc29uXCJcbiAgICAgICAgfSlcbiAgICB9O1xuXG4gICAgdmFyIHByb2R1Y3RUZW1wbGF0ZSA9IGZ1bmN0aW9uKHByb2R1Y3QpIHtcblxuICAgICAgICBub2Rlcy4kYWRkVG9CYXNrZXRCdG4gPSAkKCc8YnV0dG9uIGNsYXNzPVwiYWRkVG9CYXNrZXRcIj5BZGQgdG8gQmFza2V0PC9idXR0b24+Jyk7XG4gICAgICAgIG5vZGVzLiRyZW1vdmVGcm9tQmFza2V0QnRuID0gJCgnPGJ1dHRvbiBjbGFzcz1cInJlbW92ZUZyb21CYXNrZXRcIj5SZW1vdmUgRnJvbSBCYXNrZXQ8L2J1dHRvbj4nKTtcblxuICAgICAgICB2YXIgcHJvZHVjdE5hbWUgPSAnPGgzIGNsYXNzPVwibmFtZVwiPicgKyBwcm9kdWN0Lm5hbWUgKyAnPC9oMz4nO1xuICAgICAgICB2YXIgcHJvZHVjdFByaWNlID0gJzxwIGNsYXNzPVwicHJpY2VcIj4nICsgcHJvZHVjdC5wcmljZSArICc8L3A+JztcbiAgICAgICAgdmFyIGFkZFRvQmFza2V0QnRuID0gbm9kZXMuJGFkZFRvQmFza2V0QnRuO1xuXG4gICAgICAgIHZhciB0ZW1wbGF0ZSA9IHByb2R1Y3ROYW1lICsgcHJvZHVjdFByaWNlO1xuXG4gICAgICAgIHNldFVwRXZlbnRzKCk7XG5cbiAgICAgICAgcmV0dXJuICQoJzxkaXY+Jywge1xuICAgICAgICAgICAgJ2NsYXNzJzogJ3Rlc3QnLFxuICAgICAgICAgICAgJ2RhdGEtaWQnOiBwcm9kdWN0LmlkXG4gICAgICAgIH0pLmFwcGVuZCh0ZW1wbGF0ZSkuYXBwZW5kKG5vZGVzLiRhZGRUb0Jhc2tldEJ0bikuYXBwZW5kKG5vZGVzLiRyZW1vdmVGcm9tQmFza2V0QnRuKTtcbiAgICB9XG5cblxuICAgIHZhciBzZXRVcExpc3QgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuUHJvbWlzZSgpLmRvbmUoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgUHJvZHVjdHMgPSBkYXRhO1xuICAgICAgICAgICAgY29uc29sZS5sb2coUHJvZHVjdHMpO1xuICAgICAgICAgICAgJC5lYWNoKFByb2R1Y3RzLCBmdW5jdGlvbihrLCB2KSB7XG4gICAgICAgICAgICAgICAgY29udGV4dC5hcHBlbmQocHJvZHVjdFRlbXBsYXRlKFByb2R1Y3RzW2tdKSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm5Qcm9taXNlKCkuZXJyb3IoZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICB9KVxuICAgIH07XG5cbiAgICB2YXIgc2V0VXBFdmVudHMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICBmdW5jdGlvbiBmaWx0ZXIoSUQpIHtcbiAgICAgICAgICAgIHJldHVybiAkLmdyZXAoUHJvZHVjdHMsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZS5pZCA9PSBJRDsgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBub2Rlcy4kYWRkVG9CYXNrZXRCdG4ub24oJ2NsaWNrIHRhcCcsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIHZhciBJRCA9ICQodGhpcykucGFyZW50cygpLmRhdGEoJ2lkJyk7XG5cbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBmaWx0ZXIoSUQpO1xuXG4gICAgICAgICAgICByZXN1bHQuZXZlbnQgPSAnQUREX1BST0RVQ1RfVE9fQkFTS0VUJztcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgICAgIH0pO1xuICAgICAgICBub2Rlcy4kcmVtb3ZlRnJvbUJhc2tldEJ0bi5vbignY2xpY2sgdGFwJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgdmFyIElEID0gJCh0aGlzKS5wYXJlbnRzKCkuZGF0YSgnaWQnKTtcblxuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGZpbHRlcihJRCk7XG5cbiAgICAgICAgICAgIHJlc3VsdC5ldmVudCA9ICdSRU1PVkVfUFJPRFVDVF9GUk9NX0JBU0tFVCc7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIHNldFVwTGlzdCgpO1xuXG59KSgpXG4iLCJUZW1wbGF0ZXMuSG9tZSA9IHt9O1xuXG5UZW1wbGF0ZXMuSG9tZS5ldmVudHMgPSAoZnVuY3Rpb24oKSB7XG4gICAgY29uc29sZS5sb2coJ2V2ZW50cycpO1xufSkoKTtcblxuVGVtcGxhdGVzLkhvbWUuc2V0dXBDb21wb25lbnRzID0gKGZ1bmN0aW9uKCkge1xuICAgIC8vIG5ldyBzbGlkZXJcbiAgICAvLyB2YXIgc2xpZGVyID0gbmV3IENvbXBvbmVudHMuU2ltcGxlU2xpZGVyO1xuICAgIC8vIHNsaWRlci5uZXdTbGlkZXIoe1xuICAgIC8vICAgICB0ZXN0OiAndGVzdGluZ25nbidcbiAgICAvLyB9KTtcblxuICAgIFxuXG5cbiAgICB2YXIgaG9tZVNsaWRlciA9IG5ldyBDb21wb25lbnRzLlNpbXBsZVNsaWRlci5uZXdTbGlkZXIoe1xuICAgICAgICB0ZXN0OiAnaG9tZSBzbGlkZXInXG4gICAgfSlcblxuICAgIC8vIG5ldyBhY2NvcmRpb25cbiAgICB2YXIgYWNjb3JkaW9uID0gbmV3IENvbXBvbmVudHMuQWNjb3JkaW9uO1xuICAgIGFjY29yZGlvbi5uZXdBY2NvcmRpb24oKTtcblxuICAgIGNvbnNvbGUubG9nKGFjY29yZGlvbik7XG5cbiAgICBDb21wb25lbnRzLmFqYXhCbG9nUG9zdHMoKS5ibG9nUG9zdHMoKTtcblxuXG59KSgpO1xuXG4iXX0=
