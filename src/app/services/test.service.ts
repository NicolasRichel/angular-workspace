import { Injectable } from '@angular/core';
import { Observable, of, zip } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';


const TEST = {
  id: 0,
  children: [
    {
      id: 1,
      children: [
        {
          id: 4,
          children: [
            {
              id: 7,
              children: []
            },
            {
              id: 8,
              children: []
            }
          ]
        },
        {
          id: 5,
          children: []
        }
      ]
    },
    {
      id: 2,
      children: [
        {
          id: 6,
          children: [
            {
              id: 9,
              children: []
            }
          ]
        }
      ]
    },
    {
      id: 3,
      children: []
    }
  ]
};


@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() {}


  getObject(): Observable<any> {
    return of( TEST ).pipe(mergeMap( this._transform.bind(this) ));
  }

  private _transform(object: any): Observable<any> {
    return this._getName(object.id).pipe(
      map( (name: string) => ({ name, children: object.children }) ),
      mergeMap(
        (obj: any) => (obj.children.length === 0 ? of([]) : zip(
          ...obj.children.map( (child: any) => this._transform(child) )
        )).pipe(
          map( (children: any[]) => Object.assign(obj, { children }) )
        )
      )
    );
  }

  private _getName(id: number): Observable<string> {
    switch (id) {
      case 0: return of('000');
      case 1: return of('A');
      case 2: return of('B');
      case 3: return of('C');
      case 4: return of('D');
      case 5: return of('E');
      case 6: return of('F');
      case 7: return of('G');
      case 8: return of('H');
      case 9: return of('I');
      default: return of('Z');
    }
  }

}
