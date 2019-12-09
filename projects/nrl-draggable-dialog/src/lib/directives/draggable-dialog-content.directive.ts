import { Directive, ViewContainerRef } from '@angular/core';


@Directive({
  selector: '[nrlDraggableDialogContent]'
})
export class DraggableDialogContentDirective {

  constructor(
    public container: ViewContainerRef
  ) {}

}
