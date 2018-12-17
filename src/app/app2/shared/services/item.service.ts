import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

const items = [];


@Injectable({
  providedIn: 'root'
})
export class ItemService {

  public itemSubject = new Subject<any[]>();

  constructor() {}


  getItems() {
    this.itemSubject.next( items );
  }

}
