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

// blog.js

var test = 0;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzL2NvbXBvbmVudHMvc2xpZGVyLmpzIiwianMvY29tcG9uZW50cy9hY2NvcmRpb24uanMiLCJqcy90ZW1wbGF0ZXMvYmxvZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1JBO0FBQ0E7QUFDQSIsImZpbGUiOiJibG9nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiQ29tcG9uZW50cy5TaW1wbGVTbGlkZXIgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgY29uZmlnID0ge1xuICAgICAgICB0ZXN0OiAndGVzdCdcbiAgICB9O1xuICAgIHZhciBuZXdTbGlkZXIgPSBmdW5jdGlvbihvcHRpb25zKSB7XG5cblxuICAgICAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgY29uZmlnLCBvcHRpb25zKTtcblxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm9wdGlvbnMpO1xuXG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH07XG5cbiAgICB2YXIgcHJvdG8gPSBuZXdTbGlkZXIucHJvdG90eXBlO1xuXG4gICAgcHJvdG8uaW5pdCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdpbml0Jyk7XG4gICAgICAgXG5cbiAgICB9O1xuXG4gICBcbiAgICByZXR1cm4ge1xuICAgICAgICBuZXdTbGlkZXI6IG5ld1NsaWRlclxuICAgIH1cbn0gIFxuXG5Db21wb25lbnRzLlNpbXBsZVNsaWRlciA9IENvbXBvbmVudHMuU2ltcGxlU2xpZGVyKCk7XG5cbiIsIkNvbXBvbmVudHMuQWNjb3JkaW9uID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGRlZmF1bHRzID0ge1xuICAgICAgICB0ZXN0OiAndGVzdCdcbiAgICB9O1xuICAgIHRoaXMubmV3QWNjb3JkaW9uID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCduZXcgYWNjb3JkaW9uJyk7XG4gICAgfVxufVxuIiwiLy8gYmxvZy5qc1xuXG52YXIgdGVzdCA9IDA7Il19
