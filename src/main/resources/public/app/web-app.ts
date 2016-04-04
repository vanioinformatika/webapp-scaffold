import {Component} from 'angular2/core';
import {Router, Route, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {Home} from './components/home/home';
import {Technologies} from './components/technologies/technologies';

@Component({
  selector: 'web-app',
  providers: [],
  pipes: [],
  directives: [ROUTER_DIRECTIVES],
  //External file
  templateUrl: 'app/web-app.html'
  //Internal template string
  //template: '<div id="header"></div><div id="content"><p>Some text</p></div><div id="footer"></div>',
})
@RouteConfig([
  new Route({ path: '/home',  component: Home,  name: 'Home', useAsDefault: true }),
  new Route({ path: '/technologies', component: Technologies, name: 'Technologies' })
])
export class WebApp {
    constructor() {}
}
