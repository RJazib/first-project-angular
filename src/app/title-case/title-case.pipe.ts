import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase',
})
export class TitleCasePipe implements PipeTransform {
  transform(value: string): unknown {
    let preposition = [
      'aboard',
      'about',
      'above',
      'across',
      'after',
      'against',
      'along',
      'amid',
      'amidst',
      'among',
      'around',
      'as',
      'at',
      'athwart',
      'atop',
      'barring',
      'before',
      'behind',
      'below',
      'beneath',
      'beside',
      'besides',
      'between',
      'beyond',
      'but',
      'of',
      'off',
      'on',
      'onto',
      'opposite',
      'out',
      'outside',
      'over',
      "the",
    ];
   let words = value.split(" ");
   for(let i=0;i<words.length;i++){
    if(i>0 && preposition.includes(words[i].toLowerCase()))
      words[i]=words[i].toLowerCase();
    else{
      words[i]=words[i].substr(0,1).toUpperCase() + words[i].substr(1).toLowerCase()
    }
   }
    return words.join(" ");
  }
}
