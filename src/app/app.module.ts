// Modules
import { NgModule } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';

// Components
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    TodoListComponent,
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
