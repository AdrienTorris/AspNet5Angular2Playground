System.register(['angular2/core', 'angular2/http', 'rxjs/add/operator/map', 'rxjs/Observable', './helpers.module'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, Observable_1, helpers_module_1;
    var DataService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (helpers_module_1_1) {
                helpers_module_1 = helpers_module_1_1;
            }],
        execute: function() {
            /**
             * Service dealing with blog data
             */
            DataService = (function () {
                function DataService(http) {
                    this.http = http;
                }
                /**
                 * Call API to list available blog posts
                 */
                DataService.prototype.listBlogPosts = function () {
                    return this.http.get(helpers_module_1.HelperModule.UrlBuilder.BuildPostListUrl()).map(function (res) { return res.json(); });
                };
                DataService.prototype.getBlogPost = function (id) {
                    return this.http.get(helpers_module_1.HelperModule.UrlBuilder.BuildPostUrl(id)).map(function (res) { return res.json(); });
                };
                DataService.prototype.create = function (blogPost) {
                    var _this = this;
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/x-www-form-urlencoded');
                    return Observable_1.Observable.create(function (observer) {
                        var ret = false;
                        _this.http.post(helpers_module_1.HelperModule.UrlBuilder.BuildCreateUrl(), helpers_module_1.HelperModule.UrlBuilder.BuildCreatePostBody(blogPost), {
                            headers: headers
                        })
                            .map(function (res) { return res.json(); })
                            .subscribe(function (result) {
                            observer.next(result);
                            observer.complete();
                        }, function (err) {
                            console.log(err);
                            observer.next(false);
                            observer.complete();
                        }, function () { return console.log('Blog Post creation completed'); });
                    });
                };
                DataService.prototype.listCategories = function () {
                    return this.http.get(helpers_module_1.HelperModule.UrlBuilder.BuildCategoryListUrl()).map(function (res) { return res.json(); });
                };
                DataService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], DataService);
                return DataService;
            })();
            exports_1("DataService", DataService);
        }
    }
});
//# sourceMappingURL=service.js.map