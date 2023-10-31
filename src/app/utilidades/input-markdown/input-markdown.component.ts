import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input-markdown',
  templateUrl: './input-markdown.component.html',
  styleUrls: ['./input-markdown.component.css']
})
export class InputMarkdownComponent {
  @Output() 
    changeMarkdown:EventEmitter<string> = new EventEmitter<string>()

  contenidoMarkDown = ''; 
  
  inputTextArea(event:any){
    console.log(event.target.value)
    this.contenidoMarkDown = event.target.value;
    this.changeMarkdown.emit(event.target.value); 
  }
}
