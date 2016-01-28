import { Injectable } from 'angular2/core';
import { Http, Response, Headers } from 'angular2/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

/**
 * Service dealing with blog data
 */
@Injectable()
export class DataService {

    constructor(private http: Http) { }

    listBlogPosts() {
        return this.http.get('http://localhost:48900/Blog/ListPosts').map(res => (<Response>res).json());
    }
}