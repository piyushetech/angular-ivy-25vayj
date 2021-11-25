import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1> {{name}}</h1>`,
  styles: [`h1 { font-family: Lato;color:34475c }`]
})
export class HelloComponent  {
  @Input() name: string;
}
