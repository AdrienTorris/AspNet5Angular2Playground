import { Component, OnInit } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { BlogPost, BlogCategory } from './model';
import { DataService } from './service';
import {RouteParams, RouteData} from 'angular2/router';
import { RouteConfig, Location, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

@Component({
    selector: 'create-post',
    templateUrl: 'app/blog/addpost-component.html',
    providers: [DataService],
    directives: [ROUTER_DIRECTIVES]
})
export class CreatePostComponent implements OnInit {
    blogPost: BlogPost = new BlogPost();
    submitted: boolean = false;
    operationFinished: boolean = false;
    operationStatus: boolean;
    categories: BlogCategory[] = new Array<BlogCategory>();

    constructor(private dataService: DataService) {

    }

    ngOnInit() {

        this.dataService.listCategories().subscribe(data => {
            var jsonData = JSON.parse(JSON.stringify(data));
            for (var i = 0; i < jsonData.length; i++) {
                this.categories.push(new BlogCategory(jsonData[i].id, jsonData[i].name, jsonData[i].description));
            }
        });

    }

    onSubmit() {
        this.submitted = true;

        this.dataService.create(this.blogPost).subscribe(result => {
            this.operationFinished = true;
            this.operationStatus = result;
        });
    }
}