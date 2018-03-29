import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-msg',
  template: `
      Say {{childMsg}}
  `,
  styleUrls: ['./msg.component.scss']
})
export class MsgComponent implements OnInit {

  
  constructor() { }

  ngOnInit() {
  }
  @Input() childMsg: string;
  
}
