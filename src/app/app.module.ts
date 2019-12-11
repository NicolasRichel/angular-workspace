// Modules
import { NgModule } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';

// Components
import { AppComponent } from './app.component';
import { DraggableDialogExampleComponent } from './examples/draggable-dialog-example/draggable-dialog-example.component';
import { ResizableBoxExampleComponent } from './examples/resizable-box-example/resizable-box-example.component';
import { UiComponentsExampleComponent } from './examples/ui-components-example/ui-components-example.component';
import { HelloWorldComponent } from './examples/view-manager-example/hello-world/hello-world.component';
import { TodoListComponent } from './examples/view-manager-example/todo-list/todo-list.component';
import { ViewManagerExampleComponent } from './examples/view-manager-example/view-manager-example.component';


@NgModule({
  declarations: [
    AppComponent,
    DraggableDialogExampleComponent,
    HelloWorldComponent,
    ResizableBoxExampleComponent,
    TodoListComponent,
    UiComponentsExampleComponent,
    ViewManagerExampleComponent,
  ],
  entryComponents: [
    HelloWorldComponent,
    TodoListComponent,
  ],
  providers: [
  ],
  imports: [
    MatCheckboxModule,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
