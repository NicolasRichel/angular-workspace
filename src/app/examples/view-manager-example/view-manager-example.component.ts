import { Component } from '@angular/core';

// Components
import { HelloWorldComponent } from '../../sample-components/hello-world/hello-world.component';
import { TodoListComponent } from '../../sample-components/todo-list/todo-list.component';


@Component({
  selector: 'view-manager-example',
  templateUrl: './view-manager-example.component.html',
  styleUrls: ['./view-manager-example.component.scss']
})
export class ViewManagerExampleComponent {

  views: any[] = [
    {
      name: 'hello',
      icon: 'favorite',
      component: HelloWorldComponent
    },
    {
      name: 'todo',
      icon: 'format_list_bulleted',
      component: TodoListComponent
    }
  ];

  constructor() {}

}
