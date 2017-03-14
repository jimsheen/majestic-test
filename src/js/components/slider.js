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

