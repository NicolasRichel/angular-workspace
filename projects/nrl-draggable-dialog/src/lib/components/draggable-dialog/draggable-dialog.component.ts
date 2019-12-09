import { Component, ComponentFactoryResolver, Input, ViewChild, OnInit, Type } from '@angular/core';

// Models
import { DraggableDialogData } from '../../models/draggable-dialog-data.interface';

// Directives
import { DraggableDialogContentDirective } from '../../directives/draggable-dialog-content.directive';

// Services
import { DraggableDialogService } from '../../services/draggable-dialog.service';


@Component({
  selector: 'nrl-draggable-dialog',
  templateUrl: './draggable-dialog.component.html',
  styleUrls: ['./draggable-dialog.component.scss']
})
export class DraggableDialogComponent implements OnInit {

  @Input() data: DraggableDialogData;
  @Input() component: Type<any>;

  @ViewChild(DraggableDialogContentDirective, { static: true })
  dialogContent: DraggableDialogContentDirective;

  constructor(
    private _componentFactoryResolver: ComponentFactoryResolver,
    private _draggableDialogService: DraggableDialogService
  ) {}

  ngOnInit() {
    const factory = this._componentFactoryResolver.resolveComponentFactory(
      this.component
    );
    const container = this.dialogContent.container;
    container.clear();
    const componentRef = container.createComponent( factory );
  }


  close(): void {
    this._draggableDialogService.closeDialog( this.data.name );
  }

}
