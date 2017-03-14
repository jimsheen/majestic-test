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

var test = 88888;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzL2NvbXBvbmVudHMvc2xpZGVyLmpzIiwianMvY29tcG9uZW50cy9hY2NvcmRpb24uanMiLCJqcy90ZW1wbGF0ZXMvdGVzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1JBIiwiZmlsZSI6InRlc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJDb21wb25lbnRzLlNpbXBsZVNsaWRlciA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBjb25maWcgPSB7XG4gICAgICAgIHRlc3Q6ICd0ZXN0J1xuICAgIH07XG4gICAgdmFyIG5ld1NsaWRlciA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcblxuXG4gICAgICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBjb25maWcsIG9wdGlvbnMpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMub3B0aW9ucyk7XG5cbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfTtcblxuICAgIHZhciBwcm90byA9IG5ld1NsaWRlci5wcm90b3R5cGU7XG5cbiAgICBwcm90by5pbml0ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgY29uc29sZS5sb2coJ2luaXQnKTtcbiAgICAgICBcblxuICAgIH07XG5cbiAgIFxuICAgIHJldHVybiB7XG4gICAgICAgIG5ld1NsaWRlcjogbmV3U2xpZGVyXG4gICAgfVxufSAgXG5cbkNvbXBvbmVudHMuU2ltcGxlU2xpZGVyID0gQ29tcG9uZW50cy5TaW1wbGVTbGlkZXIoKTtcblxuIiwiQ29tcG9uZW50cy5BY2NvcmRpb24gPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZGVmYXVsdHMgPSB7XG4gICAgICAgIHRlc3Q6ICd0ZXN0J1xuICAgIH07XG4gICAgdGhpcy5uZXdBY2NvcmRpb24gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ25ldyBhY2NvcmRpb24nKTtcbiAgICB9XG59XG4iLCJ2YXIgdGVzdCA9IDg4ODg4OyJdfQ==
