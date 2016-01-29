import { Component, OnInit } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { BlogPost } from './model';
import { DataService } from './service';
import {RouteParams, RouteData} from 'angular2/router';
import { RouteConfig, Location, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

@Component({
    selector: 'postCtn',
    templateUrl: 'app/blog/postdetails-component.html',
    providers: [DataService],
    directives: [ROUTER_DIRECTIVES]
})
export class PostDetailsComponent implements OnInit {
    id: string;
    blogPost: BlogPost = new BlogPost();

    constructor(data: RouteData, routeParam: RouteParams, private dataService: DataService) {
        this.id = routeParam.get('id');
    }

    ngOnInit() {
        if (this.id != null) {
            this.dataService.getBlogPost(this.id).subscribe(data => {
                this.blogPost = data;
            },
                err => console.log(err));
        }
    }
}