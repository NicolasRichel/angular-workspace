import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
import { Card } from '../models/card.model';

@Injectable({ providedIn: 'root' })
export class CardService {

  public cardSubject = new Subject<Card[]>();

  constructor(private http: HttpClient) {}

  getCards() {
    this.http
      .get(`${environment.api_url}/cards.json`)
      .subscribe((cards: Card[]) => {
        this.cardSubject.next(cards);
      });
  }

}
