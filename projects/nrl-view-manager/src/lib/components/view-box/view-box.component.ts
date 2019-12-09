import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'nrl-view-box',
  templateUrl: './view-box.component.html',
  styleUrls: ['./view-box.component.scss']
})
export class ViewBoxComponent {

  @Input() view: any;

  @Output() selected = new EventEmitter<any>();
  @Output() close = new EventEmitter<any>();

  constructor() {}

}
