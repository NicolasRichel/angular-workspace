import { Type } from '@angular/core';

// Components
import { DraggableDialogExampleComponent } from './draggable-dialog-example/draggable-dialog-example.component';
import { ResizableBoxExampleComponent } from './resizable-box-example/resizable-box-example.component';
import { UiComponentsExampleComponent } from './ui-components-example/ui-components-example.component';
import { ViewManagerExampleComponent } from './view-manager-example/view-manager-example.component';


export const EXAMPLES: { [exampleName: string]: Type<any> } = {
  'draggable-dialog': DraggableDialogExampleComponent,
  'resizable-box': ResizableBoxExampleComponent,
  'ui-components': UiComponentsExampleComponent,
  'view-manager': ViewManagerExampleComponent
};
