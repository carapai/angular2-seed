import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {NavbarComponent} from './navbar.component';
import {ToolbarComponent} from './toolbar.component';
import {NameListService} from '../shared/index';
import {HomeComponent} from '../+home/index';
import {AboutComponent} from '../+about/index';
import {HelloComponent} from '../hello/hello.component';

@Component({
  selector: 'sd-app',
  viewProviders: [NameListService],
  templateUrl: 'app/components/app.component.html',
  directives: [ROUTER_DIRECTIVES, NavbarComponent, ToolbarComponent]
})
@RouteConfig([
  {
    path: '/',
    name: 'Home',
    component: HomeComponent
  },
  {
    path: '/about',
    name: 'About',
    component: AboutComponent
  },
  {
    path: '/hello',
    name: 'Hello',
    component: HelloComponent
  }
])
export class AppComponent {}
