import { Control } from "angular2/common";
import { Http, Response, Headers } from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Inject } from 'angular2/core';
import { HelperModule } from './helpers.module';

interface ValidationResult {
    [key: string]: boolean;
}

export class PostValidator {

    static http: Http;

    constructor(@Inject(Http) public http: Http) {
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

    static titleUnicity(control: Control, http: Http): Promise<ValidationResult> {

        // not working : issue here : https://github.com/angular/angular/issues/1068
        return new Promise(resolve  => {
            setTimeout(() => {
                var headers: Headers = new Headers();
                headers.append('Content-Type', 'application/json');
                this.http.get(HelperModule.UrlBuilder.BuildCheckPostTitleUnicityUrl(control.value), { headers: headers })
                    .map(res => res.json())
                    .subscribe(data => {
                        console.log(data);
                        resolve({ titleUnicity: data })
                    })
            }, 2000)
        });

    }
    
    static titleFormat(control: Control): ValidationResult {

        if (control.value != "" && control.value.length > 3) {
            return { "titleFormat": true };
        }

        return null;
    }

    static mailFormat(control: Control): ValidationResult {

        var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        console.log('mailformat:' + control.value + ' -' + control.value.length + ' - ' + EMAIL_REGEXP.test(control.value));



        if (control.value != "" && (control.value.length <= 5 || !EMAIL_REGEXP.test(control.value))) {
            return { "incorrectMailFormat": true };
        }

        return null;
    }

    static startsWithNumber(control: Control): ValidationResult {

        if (control.value != "" && !isNaN(control.value.charAt(0))) {
            return { "startsWithNumber": true };
        }

        return null;
    }
}