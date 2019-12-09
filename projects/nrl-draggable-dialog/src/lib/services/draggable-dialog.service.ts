import { Overlay, OverlayPositionBuilder, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ComponentRef, Injectable, Type } from '@angular/core';
import { Subject, Subscription } from 'rxjs';

// Models
import { DraggableDialogData } from '../models/draggable-dialog-data.interface';

// Components
import { DraggableDialogComponent } from '../components/draggable-dialog/draggable-dialog.component';


@Injectable({
  providedIn: 'root'
})
export class DraggableDialogService {

  closeDialogSubject = new Subject<string>();

  private _overlayRef: OverlayRef;
  private _closeDialogSubscriptions: { name: string, subscription: Subscription }[];

  constructor(
    private _overlay: Overlay,
    private _overlayPositionBuilder: OverlayPositionBuilder
  ) {
    const positionStrategy = this._overlayPositionBuilder.global()
      .centerHorizontally()
      .centerVertically();

    this._overlayRef = this._overlay.create({
      hasBackdrop: true,
      positionStrategy
    });

    this._closeDialogSubscriptions = [];
  }


  openDialog(component: Type<any>, data: DraggableDialogData): void {
    const tooltipPortal = new ComponentPortal(DraggableDialogComponent);
    const tooltipRef: ComponentRef<DraggableDialogComponent> = this._overlayRef.attach(tooltipPortal);
    tooltipRef.instance.data = data;
    tooltipRef.instance.component = component;
    this._closeDialogSubscriptions.push({
      name: data.name,
      subscription: this.closeDialogSubject.subscribe(
        (dialogName: string) => {
          if (data.name === dialogName) this._overlayRef.detach();
        }
      )
    });
  }

  closeDialog(name: string): void {
    this.closeDialogSubject.next( name );
    this._closeDialogSubscriptions
      .find( (s: any) => s.name === name )
      .subscription.unsubscribe();
  }

}
