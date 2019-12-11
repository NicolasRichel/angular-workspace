import { Component, OnChanges, Input, SimpleChanges } from '@angular/core';
import { ComponentPortal } from '@angular/cdk/portal';
import { EXAMPLES } from '../examples/examples';


@Component({
  selector: 'example-container',
  templateUrl: './example-container.component.html',
  styleUrls: ['./example-container.component.scss']
})
export class ExampleContainerComponent implements OnChanges {

  @Input() example: string;

  exampleComponent: ComponentPortal<any>;

  constructor() {}


  ngOnChanges(changes: SimpleChanges) {
    if (changes.example && changes.example.currentValue) {
      this.exampleComponent = new ComponentPortal(
        EXAMPLES[ changes.example.currentValue ]
      );
    } else {
      this.exampleComponent = null;
    }
  }

}
