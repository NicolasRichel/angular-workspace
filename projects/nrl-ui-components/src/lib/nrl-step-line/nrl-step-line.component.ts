import { Component, Input } from '@angular/core';


@Component({
  selector: 'nrl-step-line',
  templateUrl: './nrl-step-line.component.html',
  styleUrls: ['./nrl-step-line.component.scss']
})
export class NrlStepLineComponent {

  @Input() steps: any[];

  constructor() {}


  select(stepLabel: string): void {
    this.steps.forEach(step => step.selected = false);
    this.steps.find(step => step.label===stepLabel).selected = true;
  }

}
