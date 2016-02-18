import { Component, OnInit } from 'angular2/core';
import { CORE_DIRECTIVES, FormBuilder, Validators, Control, ControlGroup, FORM_DIRECTIVES } from 'angular2/common';
import { BlogPost, BlogCategory } from './model';
import { DataService } from './service';
import {RouteParams, RouteData} from 'angular2/router';
import { RouteConfig, Location, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { PostValidator } from './validator';

@Component({
    selector: 'create-post',
    templateUrl: 'app/blog/addpost.html',
    providers: [DataService],
    directives: [ROUTER_DIRECTIVES]
})
export class AddPostComponent implements OnInit {
    submitted: boolean = false;
    operationFinished: boolean = false;
    operationStatus: boolean;
    categories: BlogCategory[] = new Array<BlogCategory>();

    addPostForm: ControlGroup;
    title: Control;
    content: Control;
    authorName: Control;
    authorMail: Control;
    category: Control;

    constructor(private dataService: DataService, private builder: FormBuilder) {

        this.title = new Control(
            "",
            Validators.compose([Validators.required, PostValidator.titleFormat, PostValidator.startsWithNumber]),
            PostValidator.titleUnicity
        );

        this.content = new Control(
            "",
            Validators.compose([Validators.required])
        );

        this.authorMail = new Control(
            "",
            Validators.compose([Validators.required, PostValidator.mailFormat])
        );

        this.authorName = new Control(
            "",
            Validators.compose([Validators.required, PostValidator.startsWithNumber])
        );

        this.category = new Control(
            "",
            Validators.compose([Validators.required])
        );

        this.addPostForm = builder.group({
            title: this.title,
            content: this.content,
            authorMail: this.authorMail,
            authorName: this.authorName,
            category: this.category
        });
    }

    ngOnInit() {

        this.dataService.listCategories().subscribe(data => {
            var jsonData = JSON.parse(JSON.stringify(data));
            for (var i = 0; i < jsonData.length; i++) {
                this.categories.push(new BlogCategory(jsonData[i].id, jsonData[i].name, jsonData[i].description));
            }
        });

    }

    submitData() {
        console.log(JSON.stringify(this.addPostForm.value))
    }

}