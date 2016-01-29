System.register([], function(exports_1) {
    var BlogPost, BlogCategory;
    return {
        setters:[],
        execute: function() {
            /**
             * Blog post's model
             */
            BlogPost = (function () {
                function BlogPost() {
                }
                return BlogPost;
            })();
            exports_1("BlogPost", BlogPost);
            /**
             * Model of a blog's category for grouping posts
             */
            BlogCategory = (function () {
                function BlogCategory() {
                }
                return BlogCategory;
            })();
            exports_1("BlogCategory", BlogCategory);
        }
    }
});
//# sourceMappingURL=model.js.map