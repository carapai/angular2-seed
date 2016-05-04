import {Component} from 'angular2/core';

@Component({
  selector:'another-component',
  template:`
      {{name}} - This is easy
  `
})
export class AnotherComponent{
    name = 'Carapai'
}
