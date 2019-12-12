// Modules
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PortalModule } from '@angular/cdk/portal';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// NRL Libraries
import { NrlDraggableDialogModule } from 'nrl-draggable-dialog';
import { NrlResizableBoxModule } from 'nrl-resizable-box';
// import { NrlUiComponentsModule } from 'nrl-ui-components';
import { NrlViewManagerModule } from 'nrl-view-manager';

// Components
import { AppComponent } from './app.component';
import { DraggableDialogExampleComponent } from './examples/draggable-dialog-example/draggable-dialog-example.component';
import { ResizableBoxExampleComponent } from './examples/resizable-box-example/resizable-box-example.component';
import { UiComponentsExampleComponent } from './examples/ui-components-example/ui-components-example.component';
import { ViewManagerExampleComponent } from './examples/view-manager-example/view-manager-example.component';
import { ExampleContainerComponent } from './example-container/example-container.component';
import { HelloWorldComponent } from './sample-components/hello-world/hello-world.component';
import { TodoListComponent } from './sample-components/todo-list/todo-list.component';


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
    NrlDraggableDialogModule,
    NrlResizableBoxModule,
    // NrlUiComponentsModule,
    NrlViewManagerModule,
    PortalModule,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
