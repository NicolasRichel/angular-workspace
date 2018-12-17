// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';

// Services
import { ColumnService } from './shared/services/column.service';
import { ItemService } from './shared/services/item.service';

// Components
import { KanbanComponent } from './kanban/kanban.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemComponent } from './items/item/item.component';


@NgModule({
  declarations: [
    KanbanComponent,
    ItemListComponent,
    ItemComponent
  ],
  imports: [
    CommonModule,
    DragDropModule
  ],
  providers: [
    ColumnService,
    ItemService
  ]
})
export class App2Module {}
