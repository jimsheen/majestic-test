// Object literal design pattern

console.log('header');

Global.Header = {
    init: function() {
        this.events();
        this.basketSetup();
    }
}

Global.Header.events = function() {
    console.log('header events');
}

 

Global.Header.init();

