import { Injectable } from 'angular2/core';
import { Http, Response, Headers } from 'angular2/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import { HelperModule } from './helpers.module';
import { BlogPost } from './model';

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

    create(blogPost: BlogPost) {
        var headers: Headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return Observable.create(observer => {
            var ret: boolean = false;
            this.http.post(
                HelperModule.UrlBuilder.BuildCreateUrl()
                , HelperModule.UrlBuilder.BuildCreatePostBody(blogPost), {
                    headers: headers
                })
                .map(res => res.json())
                .subscribe(result => {
                    observer.next(result);
                    observer.complete();
                }, err => {
                    console.log(err)
                    observer.next(false);
                    observer.complete();
                }, () => console.log('Blog Post creation completed'));
        });
    }

    listCategories() {
        return this.http.get(HelperModule.UrlBuilder.BuildCategoryListUrl()).map(res => (<Response>res).json());
    }

}