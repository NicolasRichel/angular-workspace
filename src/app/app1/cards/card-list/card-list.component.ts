import { Component, OnInit, Injectable, OnDestroy } from '@angular/core';
import { CardService } from 'src/app/app1/shared/services/card.service';
import { Card } from 'src/app/app1/shared/models/card.model';

@Component({
  selector: 'card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
@Injectable()
export class CardListComponent implements OnInit, OnDestroy {

  private cards: Card[];

  constructor(
    private cardService: CardService
  ) {}

  ngOnInit() {
    this.cardService.cardSubject.subscribe(
      cards => this.cards = cards,
      err => console.error(err)
    );
    this.cardService.getCards();
  }

  ngOnDestroy() {
    this.cardService.cardSubject.unsubscribe();
  }

}
