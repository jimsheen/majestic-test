Components.ajaxBlogPosts = function() {

    getPosts = function() {

        return $.ajax({
            url: '/posts.json'
        });
       
    }

    handleData = function(data) {
        console.log(data);
    }

   getPosts().done(function(data) {
        handleData(data);
   })


}
