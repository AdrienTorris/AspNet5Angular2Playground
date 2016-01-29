System.register([], function(exports_1) {
    var UrlBuilderConstants;
    return {
        setters:[],
        execute: function() {
            UrlBuilderConstants = (function () {
                function UrlBuilderConstants() {
                }
                Object.defineProperty(UrlBuilderConstants, "API_BASE_URL", {
                    get: function () { return 'http://localhost:48900/api/'; },
                    enumerable: true,
                    configurable: true
                });
                return UrlBuilderConstants;
            })();
            exports_1("UrlBuilderConstants", UrlBuilderConstants);
        }
    }
});
//# sourceMappingURL=UrlBuilderConstants.js.map