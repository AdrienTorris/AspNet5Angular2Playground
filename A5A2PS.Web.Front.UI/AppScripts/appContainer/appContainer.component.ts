import { Component, OnInit } from 'angular2/core';
import { AsyncRoute, Router, RouteDefinition, RouteConfig, Location, ROUTER_DIRECTIVES } from 'angular2/router';
import { WelcomeComponent } from '../home/welcome.component';

declare var System: any;

@Component({
    selector: "app",
    templateUrl: "/app/app.html",
    directives: [ROUTER_DIRECTIVES],
})

export class AppComponent implements OnInit {
    public routes: RouteDefinition[] = null;
    constructor(private router: Router,
        private location: Location) {

    }

    ngOnInit() {
        if (this.routes === null) {
            this.routes = [
                { path: "/", component: WelcomeComponent, name: "Index", useAsDefault: true }
            ];

            this.router.config(this.routes);
        }
    }

    getLinkStyle(route: RouteDefinition) {
        return this.location.path().indexOf(route.path) > -1;
    }
}