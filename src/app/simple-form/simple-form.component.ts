import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
    <input 
      #myInput 
      type="text" 
      [(ngModel)]="model"
      [ngClass]="{mousedown:isMouseDown}"
      (mousedown)="isMouseDown = true"
      (mouseup)="isMouseDown = false"
      (mouseleave)="isMouseDown = false"/>
    <button (click)="update.emit({text: model})">Click me</button>
  `,
  styles: [`
    :host {
      display: flex;
      flex-direction: column;
    }
    * {
      font-family: monospace;
    }
    input:focus{
      font-weight: bold;
      outline: none;
    }
    button{
      border: none;
    }
    .mousedown {
      border: 2px solid green;
    }
  `]
})
export class SimpleFormComponent implements OnInit {

  isMouseDown;

  @Input() model;
  @Output() update = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

}
