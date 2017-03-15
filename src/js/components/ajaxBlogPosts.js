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
