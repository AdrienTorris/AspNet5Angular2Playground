System.register(['angular2/core', 'angular2/router', '../home/welcome.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, welcome_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (welcome_component_1_1) {
                welcome_component_1 = welcome_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(router, location) {
                    this.router = router;
                    this.location = location;
                    this.routes = null;
                }
                AppComponent.prototype.ngOnInit = function () {
                    if (this.routes === null) {
                        this.routes = [
                            { path: "/", component: welcome_component_1.WelcomeComponent, name: "Index", useAsDefault: true },
                            new router_1.AsyncRoute({
                                path: "/posts",
                                name: "ListBlogPosts",
                                loader: function () { return System.import("app/blog/postlist.component").then(function (c) { return c["PostCollectionComponent"]; }); },
                                useAsDefault: false
                            }),
                            new router_1.AsyncRoute({
                                path: "/post/:id",
                                name: "BlogPostDetails",
                                loader: function () { return System.import("app/blog/postdetails.component").then(function (c) { return c["PostDetailsComponent"]; }); },
                                useAsDefault: false
                            }),
                            new router_1.AsyncRoute({
                                path: "/post/add",
                                name: "AddPost",
                                loader: function () { return System.import("app/blog/addpost.component").then(function (c) { return c["CreatePostComponent"]; }); },
                                useAsDefault: false
                            }),
                            new router_1.AsyncRoute({
                                path: "/post/add2",
                                name: "AddPostWithValidators",
                                loader: function () { return System.import("app/blog/createpost.component").then(function (c) { return c["AddPostComponent"]; }); },
                                useAsDefault: false
                            })
                        ];
                        this.router.config(this.routes);
                    }
                };
                AppComponent.prototype.getLinkStyle = function (route) {
                    return this.location.path().indexOf(route.path) > -1;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: "app",
                        templateUrl: "/app/app.html",
                        directives: [router_1.ROUTER_DIRECTIVES],
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.Location])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=appContainer.component.js.map