System.register(['angular2/core', './model', './service', 'angular2/router'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, model_1, service_1, router_1, router_2;
    var PostDetailsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (model_1_1) {
                model_1 = model_1_1;
            },
            function (service_1_1) {
                service_1 = service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            }],
        execute: function() {
            PostDetailsComponent = (function () {
                function PostDetailsComponent(data, routeParam, dataService) {
                    this.dataService = dataService;
                    this.blogPost = new model_1.BlogPost();
                    this.id = routeParam.get('id');
                }
                PostDetailsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    if (this.id != null) {
                        this.dataService.getBlogPost(this.id).subscribe(function (data) {
                            _this.blogPost = data;
                        }, function (err) { return console.log(err); });
                    }
                };
                PostDetailsComponent = __decorate([
                    core_1.Component({
                        selector: 'postCtn',
                        templateUrl: 'app/blog/postdetails-component.html',
                        providers: [service_1.DataService],
                        directives: [router_2.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteData, router_1.RouteParams, service_1.DataService])
                ], PostDetailsComponent);
                return PostDetailsComponent;
            })();
            exports_1("PostDetailsComponent", PostDetailsComponent);
        }
    }
});
//# sourceMappingURL=postdetails.component.js.map