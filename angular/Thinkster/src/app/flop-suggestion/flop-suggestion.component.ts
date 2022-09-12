import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  templateUrl: './flop-suggestion.component.html',
})
export class FlopSuggestionComponent {
  suggestions:any[] = [];
  model ={
    flopname:'',
    year : '',
    stars : ''
  }
 
  constructor() {}

  ngOnInit() {}

  addSuggestion(suggestion:any) {
    console.log(suggestion);
    this.suggestions.push(suggestion);
    console.log(this.model);

  }
}
