// Modules
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PortalModule } from '@angular/cdk/portal';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Components
import { ViewBoxComponent } from './components/view-box/view-box.component';
import { ViewManagerComponent } from './components/view-manager/view-manager.component';


@NgModule({
  declarations: [
    ViewBoxComponent,
    ViewManagerComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    DragDropModule,
    MatButtonModule,
    MatIconModule,
    PortalModule,
  ],
  exports: [
    ViewBoxComponent,
    ViewManagerComponent,
  ]
})
export class NrlViewManagerModule {}
