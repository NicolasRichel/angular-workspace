import { Component, OnInit, Injectable, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ItemService } from '../shared/services/item.service';
import { ColumnService } from '../shared/services/column.service';

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.css']
})
@Injectable()
export class KanbanComponent implements OnInit, OnDestroy {

  private subscriptions: Subscription[];

  private columns: any[] = [];
  private lists: any[] = [];

  constructor(
    private columnService: ColumnService,
    private itemService: ItemService
  ) {}

  ngOnInit() {
    this.subscriptions.push(
      this.itemService.itemSubject.subscribe((items: any[]) => {})
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach( s => s.unsubscribe() );
  }


  getItemList(col) {
    return this.lists.find( x => x.col === col ).items;
  }

}
