// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Components
import { CardListComponent } from './cards/card-list/card-list.component';
import { CardComponent } from './cards/card/card.component';

// Routes
const routes = [
  { path: 'app1/cards', component: CardListComponent },
  { path: 'app1/card/:id', component: CardComponent }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class App1RoutingModule {}
