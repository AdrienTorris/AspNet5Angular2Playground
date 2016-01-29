import { Injectable } from 'angular2/core';
import { Http, Response, Headers } from 'angular2/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import { HelperModule } from './helpers.module';

/**
 * Service dealing with blog data
 */
@Injectable()
export class DataService {

    constructor(private http: Http) { }

    /**
     * Call API to list available blog posts
     */
    listBlogPosts() {
        return this.http.get(HelperModule.UrlBuilder.BuildPostListUrl()).map(res => (<Response>res).json());
    }

    getBlogPost(id: string) {
        return this.http.get(HelperModule.UrlBuilder.BuildPostUrl(id)).map(res => (<Response>res).json());
    }

}