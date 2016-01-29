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
                    return UrlBuilder;
                })();
                HelperModule.UrlBuilder = UrlBuilder;
            })(HelperModule = HelperModule || (HelperModule = {}));
            exports_1("HelperModule", HelperModule);
        }
    }
});
//# sourceMappingURL=helpers.module.js.map