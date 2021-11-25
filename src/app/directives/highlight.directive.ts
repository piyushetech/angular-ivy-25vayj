import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  
    constructor(el: ElementRef) {
       el.nativeElement.style.backgroundColor = '#fff';
       el.nativeElement.style.color = '#34475c';
        
    }
}