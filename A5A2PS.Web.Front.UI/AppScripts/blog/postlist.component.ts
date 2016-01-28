import { Component, OnInit } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { BlogPost } from './model';
import { DataService } from './service';
import { RouteConfig, Location, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

@Component({
    selector: 'postListCtn',
    providers: [DataService],
    templateUrl: 'app/blog/postlist-component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class PostCollectionComponent implements OnInit {
    title: string;
    posts: BlogPost[];

    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.title = 'This is our awesome blog articles !';
        this.dataService.listBlogPosts().subscribe(data => {
            console.log(data);
            this.posts = data; 
        },
            err => console.log(err));
    }
}