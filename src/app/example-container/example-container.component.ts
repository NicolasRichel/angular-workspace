import { Component, Input, OnChanges, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { ComponentPortal } from '@angular/cdk/portal';
import { EXAMPLES } from '../examples/examples';


@Component({
  selector: 'example-container',
  templateUrl: './example-container.component.html',
  styleUrls: ['./example-container.component.scss'],
  encapsulation: ViewEncapsulation.None
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
