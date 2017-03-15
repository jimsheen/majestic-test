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


// blog.js

var test = 0;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzL2NvbXBvbmVudHMvc2xpZGVyLmpzIiwianMvdGVtcGxhdGVzL2Jsb2cuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQy9CQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYmxvZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIkNvbXBvbmVudHMuU2ltcGxlU2xpZGVyID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGNvbmZpZyA9IHtcbiAgICAgICAgdGVzdDogJ3Rlc3QnXG4gICAgfTtcbiAgICB2YXIgbmV3U2xpZGVyID0gZnVuY3Rpb24ob3B0aW9ucykge1xuXG5cbiAgICAgICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe30sIGNvbmZpZywgb3B0aW9ucyk7XG5cbiAgICAgICAgY29uc29sZS5sb2codGhpcy5vcHRpb25zKTtcblxuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9O1xuXG4gICAgdmFyIHByb3RvID0gbmV3U2xpZGVyLnByb3RvdHlwZTtcblxuICAgIHByb3RvLmluaXQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICBjb25zb2xlLmxvZygnaW5pdCcpO1xuICAgICAgIFxuXG4gICAgfTtcblxuICAgXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmV3U2xpZGVyOiBuZXdTbGlkZXJcbiAgICB9XG59ICBcblxuQ29tcG9uZW50cy5TaW1wbGVTbGlkZXIgPSBDb21wb25lbnRzLlNpbXBsZVNsaWRlcigpO1xuXG4iLCIvLyBibG9nLmpzXG5cbnZhciB0ZXN0ID0gMDsiXX0=
