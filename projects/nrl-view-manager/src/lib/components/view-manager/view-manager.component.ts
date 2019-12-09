import { ComponentPortal } from '@angular/cdk/portal';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'nrl-view-manager',
  templateUrl: './view-manager.component.html',
  styleUrls: ['./view-manager.component.scss']
})
export class NrlViewManagerComponent {

  @Input() views: any[];

  openedViews: any[] = [];

  constructor() {}


  openView(view: any): void {
    if (
      !this.openedViews.find((v: any) => v.name === view.name)
    ) {
      this.openedViews.push({
        name: view.name,
        icon: view.icon,
        componentPortal: new ComponentPortal(view.component),
        hasFocus: false
      });
      this.takeFocus(view.name);
      view.isOpen = true;
    }
  }

  closeView(viewName: string): void {
    this.openedViews = this.openedViews.filter((v: any) => v.name !== viewName);
    this.views.find((v: any) => v.name === viewName).isOpen = false;
  }

  takeFocus(viewName: string): void {
    this.openedViews.forEach((view: any) => view.hasFocus = (view.name === viewName));
  }

}
