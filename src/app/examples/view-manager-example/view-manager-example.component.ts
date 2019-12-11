import { Component } from '@angular/core';

// Components
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { TodoListComponent } from './todo-list/todo-list.component';


@Component({
  selector: 'view-manager-example',
  templateUrl: './view-manager-example.component.html',
  styleUrls: ['./view-manager-example.component.scss']
})
export class ViewManagerExampleComponent {

  iews: any[] = [
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
