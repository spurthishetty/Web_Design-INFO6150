import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { MsgComponent } from '../msg/msg.component';

@Component({
  selector: 'app-button',
  template: `<button class='btn btn-primary' (click)="onClick()">Call App-Child</button>`,
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  constructor() { }

  @Output() messg = new EventEmitter();
  message = "Emmiter";
  ngOnInit() {
  }

  onClick() { 

    this.message = this.message;
    this.messg.emit(this.message);
}
}
