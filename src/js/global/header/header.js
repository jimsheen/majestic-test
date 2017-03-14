// Object literal design pattern

console.log('header');

Global.Header = {
    init: function() {
        this.events();
    }
}

Global.Header.events = function() {
    console.log('header events');
}

 

Global.Header.init();

