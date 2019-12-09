import { Component } from '@angular/core';

// Components
import { HelloWorldComponent } from './components/hello-world/hello-world.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  views: any[] = [
    {
      name: 'hello',
      icon: 'favorite',
      component: HelloWorldComponent,
      isOpen: false
    },
    {
      name: 'todo',
      icon: 'format_list_bulleted',
      component: TodoListComponent,
      isOpen: false
    }
  ];

  constructor() {}

}
