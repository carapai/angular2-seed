import {Component} from 'angular2/core';
import {AnotherComponent} from './another.component';

@Component({
  selector:'hello-component',
  template:`
        <h2>Hello World</h2>
        <another-component></another-component>
  `,
  directives:[AnotherComponent]
})
export class HelloComponent{

}
