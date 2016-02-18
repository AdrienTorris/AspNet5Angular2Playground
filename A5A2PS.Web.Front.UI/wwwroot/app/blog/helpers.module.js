System.register(['../shared/constants/UrlBuilderConstants'], function(exports_1) {
    var UrlBuilderConstants_1;
    var HelperModule;
    return {
        setters:[
            function (UrlBuilderConstants_1_1) {
                UrlBuilderConstants_1 = UrlBuilderConstants_1_1;
            }],
        execute: function() {
            /**
             * Module contains several helper methods about blog data
             */
            (function (HelperModule) {
                /**
                 * Static class to build urls
                 */
                var UrlBuilder = (function () {
                    function UrlBuilder() {
                    }
                    UrlBuilder.BuildPostListUrl = function () {
                        return UrlBuilderConstants_1.UrlBuilderConstants.API_BASE_URL + 'Blog/ListPosts';
                    };
                    UrlBuilder.BuildPostUrl = function (id) {
                        return UrlBuilderConstants_1.UrlBuilderConstants.API_BASE_URL + 'Blog/Get?id=' + id;
                    };
                    UrlBuilder.BuildCreateUrl = function () {
                        return UrlBuilderConstants_1.UrlBuilderConstants.API_BASE_URL + 'Blog/Create';
                    };
                    UrlBuilder.BuildCreatePostBody = function (bp) {
                        var body = 'title=' + bp.title + '&content=' + bp.content + '&catgid=' + bp.category;
                        if (bp.author != null && bp.author != 'undefined') {
                            body += '&author=' + bp.author;
                        }
                        if (bp.authorMail != null && bp.authorMail != 'undefined') {
                            body += '&authorm=' + bp.authorMail;
                        }
                        return body;
                    };
                    UrlBuilder.BuildCategoryListUrl = function () {
                        return UrlBuilderConstants_1.UrlBuilderConstants.API_BASE_URL + 'Blog/ListCategories';
                    };
                    UrlBuilder.BuildCheckPostTitleUnicityUrl = function (title) {
                        return UrlBuilderConstants_1.UrlBuilderConstants.API_BASE_URL + 'Blog/CheckPostTitleUnicity?ttl=' + title;
                    };
                    return UrlBuilder;
                })();
                HelperModule.UrlBuilder = UrlBuilder;
            })(HelperModule = HelperModule || (HelperModule = {}));
            exports_1("HelperModule", HelperModule);
        }
    }
});
//# sourceMappingURL=helpers.module.js.map