// Modules
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PortalModule } from '@angular/cdk/portal';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// Components
import { AppComponent } from './app.component';
import { DraggableDialogExampleComponent } from './examples/draggable-dialog-example/draggable-dialog-example.component';
import { ResizableBoxExampleComponent } from './examples/resizable-box-example/resizable-box-example.component';
import { UiComponentsExampleComponent } from './examples/ui-components-example/ui-components-example.component';
import { HelloWorldComponent } from './examples/view-manager-example/hello-world/hello-world.component';
import { TodoListComponent } from './examples/view-manager-example/todo-list/todo-list.component';
import { ViewManagerExampleComponent } from './examples/view-manager-example/view-manager-example.component';
import { ExampleContainerComponent } from './example-container/example-container.component';


@NgModule({
  declarations: [
    AppComponent,
    DraggableDialogExampleComponent,
    ExampleContainerComponent,
    HelloWorldComponent,
    ResizableBoxExampleComponent,
    TodoListComponent,
    UiComponentsExampleComponent,
    ViewManagerExampleComponent,
  ],
  entryComponents: [
    DraggableDialogExampleComponent,
    HelloWorldComponent,
    ResizableBoxExampleComponent,
    TodoListComponent,
    UiComponentsExampleComponent,
    ViewManagerExampleComponent,
  ],
  providers: [
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    MatCheckboxModule,
    MatSidenavModule,
    PortalModule,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
