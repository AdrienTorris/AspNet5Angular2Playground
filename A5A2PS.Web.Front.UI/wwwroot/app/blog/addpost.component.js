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
    var core_1, model_1, service_1, router_1;
    var CreatePostComponent;
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
            }],
        execute: function() {
            CreatePostComponent = (function () {
                function CreatePostComponent(dataService) {
                    this.dataService = dataService;
                    this.blogPost = new model_1.BlogPost();
                    this.submitted = false;
                    this.operationFinished = false;
                    this.categories = new Array();
                }
                CreatePostComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.dataService.listCategories().subscribe(function (data) {
                        var jsonData = JSON.parse(JSON.stringify(data));
                        for (var i = 0; i < jsonData.length; i++) {
                            _this.categories.push(new model_1.BlogCategory(jsonData[i].id, jsonData[i].name, jsonData[i].description));
                        }
                    });
                };
                CreatePostComponent.prototype.onSubmit = function () {
                    var _this = this;
                    this.submitted = true;
                    this.dataService.create(this.blogPost).subscribe(function (result) {
                        _this.operationFinished = true;
                        _this.operationStatus = result;
                    });
                };
                CreatePostComponent = __decorate([
                    core_1.Component({
                        selector: 'create-post',
                        templateUrl: 'app/blog/addpost-component.html',
                        providers: [service_1.DataService],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [service_1.DataService])
                ], CreatePostComponent);
                return CreatePostComponent;
            })();
            exports_1("CreatePostComponent", CreatePostComponent);
        }
    }
});
//# sourceMappingURL=addpost.component.js.map