import {Component, OnInit} from "angular2/core";

@Component({
    selector: "welcome",
    templateUrl: "app/home/welcome.component.html"
})
export class WelcomeComponent implements OnInit {
    message: string;

    constructor() { }

    ngOnInit() {
        this.message = "Welcome to my ASP.NET 5 & Angular 2 sample application !"
    }
}