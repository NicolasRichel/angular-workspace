// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { App1RoutingModule } from './app1-routing.module';
import {
  MatGridListModule,
  MatCardModule
} from '@angular/material';

// Services
import { CardService } from './shared/services/card.service';

// Components
import { CardListComponent } from './cards/card-list/card-list.component';
import { CardComponent } from './cards/card/card.component';


@NgModule({
  declarations: [
    CardListComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
    App1RoutingModule,
    MatGridListModule,
    MatCardModule
  ],
  providers: [
    CardService
  ]
})
export class App1Module {}
