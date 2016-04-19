System.register(['angular2/http', 'rxjs/add/operator/map', 'angular2/core', './helpers.module'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var http_1, core_1, helpers_module_1;
    var PostValidator;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (helpers_module_1_1) {
                helpers_module_1 = helpers_module_1_1;
            }],
        execute: function() {
            PostValidator = (function () {
                function PostValidator(http) {
                    this.http = http;
                    //setTimeout(() => {
                    //    var headers: Headers = new Headers();
                    //    headers.append('Content-Type', 'application/json');
                    //    this.http.get('http://localhost:48900/api/Blog/CheckPostTitleUnicity?ttl=dfdfdfdfd', { headers: headers })
                    //        .map(res => res.json())
                    //        .subscribe(data => {
                    //            console.log(data);
                    //        })
                    //}, 2000);
                }
                PostValidator.titleUnicity = function (control, http) {
                    var _this = this;
                    // not working : issue here : https://github.com/angular/angular/issues/1068
                    return new Promise(function (resolve) {
                        setTimeout(function () {
                            var headers = new http_1.Headers();
                            headers.append('Content-Type', 'application/json');
                            _this.http.get(helpers_module_1.HelperModule.UrlBuilder.BuildCheckPostTitleUnicityUrl(control.value), { headers: headers })
                                .map(function (res) { return res.json(); })
                                .subscribe(function (data) {
                                console.log(data);
                                resolve({ titleUnicity: data });
                            });
                        }, 2000);
                    });
                };
                PostValidator.titleFormat = function (control) {
                    if (control.value != "" && control.value.length > 3) {
                        return { "titleFormat": true };
                    }
                    return null;
                };
                PostValidator.mailFormat = function (control) {
                    var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
                    console.log('mailformat:' + control.value + ' -' + control.value.length + ' - ' + EMAIL_REGEXP.test(control.value));
                    if (control.value != "" && (control.value.length <= 5 || !EMAIL_REGEXP.test(control.value))) {
                        return { "incorrectMailFormat": true };
                    }
                    return null;
                };
                PostValidator.startsWithNumber = function (control) {
                    if (control.value != "" && !isNaN(control.value.charAt(0))) {
                        return { "startsWithNumber": true };
                    }
                    return null;
                };
                PostValidator = __decorate([
                    __param(0, core_1.Inject(http_1.Http)), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], PostValidator);
                return PostValidator;
            })();
            exports_1("PostValidator", PostValidator);
        }
    }
});
//# sourceMappingURL=validator.js.map