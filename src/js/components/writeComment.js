Components.commentBox = (function() {


    var nodes = {
        $writeComment: $('form.js-write-comment'),
        $writeReply: $('form.js-write-reply')
    }

    function events() {
        var config = {};
        nodes.$writeReply.submit(function(e) {
            e.preventDefault();
            config = {
                parent: $(this).parents('ul.js-reply-container'),
                element: $(this)
            };
            addComment(config);
        });
        nodes.$writeComment.submit(function(e) {
            e.preventDefault();
            config = {
                parent: $('ul.js-comment-container'),
                element: $(this)
            };
            addComment(config);
        });
    }


    function addComment(config) {

        var data = {
            'comment': config.element.find('textarea').val()
        };

        var container = $('<li />', {
            'class': 'comment comment--reply',
        });

        var commentBody = $('<div />', {
            'class': 'comment__body',
            'html': '<span>' + data.comment + '</span>'
        });

        var commentMeta = $('<div />', {
            'class': 'comment__meta',
            'html': '<a href="#" class="comment__user">John</a> <span class="comment__date">Just now</span>'
        })

        var socialLike = $('<div />', {
            'class': 'social-like'
        });

        var socialCount = '<span>0 people like this</span>';

        var likeBtn = $('<button />', {
            'class': 'btn btn--small btn--secondary js-social-like',
            'html': 'like'
        })


        config.parent.prepend(container
            .append(commentMeta)
            .append(commentBody)
            .append(socialLike
                .append(likeBtn)
                .append(socialCount)
                .append(config.parent.element)));
    }



    events();

})();
