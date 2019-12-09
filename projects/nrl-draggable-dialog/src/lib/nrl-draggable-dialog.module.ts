import { DragDropModule } from '@angular/cdk/drag-drop';
import { OverlayModule } from '@angular/cdk/overlay';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

// Directives
import { DraggableDialogContentDirective } from './directives/draggable-dialog-content.directive';

// Components
import { DraggableDialogComponent } from './components/draggable-dialog/draggable-dialog.component';

// Services
import { DraggableDialogService } from './services/draggable-dialog.service';


@NgModule({
  declarations: [
    // Directives
    DraggableDialogContentDirective,
    // Components
    DraggableDialogComponent
  ],
  entryComponents: [
    DraggableDialogComponent
  ],
  providers: [
    DraggableDialogService
  ],
  imports: [
    DragDropModule,
    MatButtonModule,
    MatDialogModule,
    OverlayModule
  ],
  exports: [
    // Directives
    DraggableDialogContentDirective,
    // Components
    DraggableDialogComponent
  ]
})
export class NrlDraggableDialogModule {}
