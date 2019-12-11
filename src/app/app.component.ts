import { Component, OnInit } from '@angular/core';
import { EXAMPLES } from './examples/examples';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  examples: string[];
  selectedExample: string;

  constructor() {}

  ngOnInit() {
    this.examples = Object.keys(EXAMPLES);
  }

}
