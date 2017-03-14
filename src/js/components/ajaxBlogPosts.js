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
