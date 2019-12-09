import { Type } from '@angular/core';


export interface ViewDef {
  id: string;
  name: string;
  icon: string;
  component: Type<any>;
}
