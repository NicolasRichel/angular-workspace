import { Component, OnInit, Input } from '@angular/core';
import { Card } from 'src/app/app1/shared/models/card.model';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card: Card;

  constructor() {}

  ngOnInit() {}

}
