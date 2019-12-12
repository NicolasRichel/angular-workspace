import { Component } from '@angular/core';

// Components
import { HelloWorldComponent } from '../../sample-components/hello-world/hello-world.component';

// Services
import { DraggableDialogService } from 'nrl-draggable-dialog';


@Component({
  selector: 'draggable-dialog-example',
  templateUrl: './draggable-dialog-example.component.html',
  styleUrls: ['./draggable-dialog-example.component.scss']
})
export class DraggableDialogExampleComponent {

  constructor(
    private _draggableDialogService: DraggableDialogService
  ) {}


  openDialog(): void {
    this._draggableDialogService.openDialog(
      HelloWorldComponent,
      { name: 'hello-world', title: 'Hello Title' }
    );
  }

}
