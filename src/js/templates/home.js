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

