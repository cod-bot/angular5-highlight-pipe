import {PipeTransform, Pipe, Injectable} from '@angular/core';

@Pipe({
    name: 'highlight',
    pure: true
  })
  @Injectable()
  export class HighlightPipe implements PipeTransform {
  transform(text: string, term: string): string {
     return term ? text.replace(new RegExp('(' + term + ')', 'i'), `<span class="highlightClass">$1</span>`) : text;
}
}
