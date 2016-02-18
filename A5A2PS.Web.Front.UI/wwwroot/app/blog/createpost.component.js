System.register(['angular2/core', 'angular2/common', './model', './service', 'angular2/router', './validator'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, model_1, service_1, router_1, validator_1;
    var AddPostComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (model_1_1) {
                model_1 = model_1_1;
            },
            function (service_1_1) {
                service_1 = service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (validator_1_1) {
                validator_1 = validator_1_1;
            }],
        execute: function() {
            AddPostComponent = (function () {
                function AddPostComponent(dataService, builder) {
                    this.dataService = dataService;
                    this.builder = builder;
                    this.submitted = false;
                    this.operationFinished = false;
                    this.categories = new Array();
                    this.title = new common_1.Control("", common_1.Validators.compose([common_1.Validators.required, validator_1.PostValidator.titleFormat, validator_1.PostValidator.startsWithNumber]), validator_1.PostValidator.titleUnicity);
                    this.content = new common_1.Control("", common_1.Validators.compose([common_1.Validators.required]));
                    this.authorMail = new common_1.Control("", common_1.Validators.compose([common_1.Validators.required, validator_1.PostValidator.mailFormat]));
                    this.authorName = new common_1.Control("", common_1.Validators.compose([common_1.Validators.required, validator_1.PostValidator.startsWithNumber]));
                    this.category = new common_1.Control("", common_1.Validators.compose([common_1.Validators.required]));
                    this.addPostForm = builder.group({
                        title: this.title,
                        content: this.content,
                        authorMail: this.authorMail,
                        authorName: this.authorName,
                        category: this.category
                    });
                }
                AddPostComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.dataService.listCategories().subscribe(function (data) {
                        var jsonData = JSON.parse(JSON.stringify(data));
                        for (var i = 0; i < jsonData.length; i++) {
                            _this.categories.push(new model_1.BlogCategory(jsonData[i].id, jsonData[i].name, jsonData[i].description));
                        }
                    });
                };
                AddPostComponent.prototype.submitData = function () {
                    console.log(JSON.stringify(this.addPostForm.value));
                };
                AddPostComponent = __decorate([
                    core_1.Component({
                        selector: 'create-post',
                        templateUrl: 'app/blog/addpost.html',
                        providers: [service_1.DataService],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [service_1.DataService, common_1.FormBuilder])
                ], AddPostComponent);
                return AddPostComponent;
            })();
            exports_1("AddPostComponent", AddPostComponent);
        }
    }
});
//# sourceMappingURL=createpost.component.js.map