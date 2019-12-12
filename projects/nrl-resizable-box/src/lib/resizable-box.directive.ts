import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { take } from 'rxjs/operators';


// Available directions
const sides = [
  'top', 'right', 'bottom', 'left'
];
const corners = [
  'top-right', 'bottom-right', 'bottom-left', 'top-left'
];
const allDirections = [
  ...sides,
  ...corners
];

// Grabber size in pixels
const grabberSize = 6;
const grabberHalfSize = grabberSize / 2;


@Directive({
  selector: '[nrlResizableBox]'
})
export class ResizableBoxDirective implements OnInit {

  @Input() directions: string | string[] = 'all';

  @Input() minWidth: number;
  @Input() minHeight: number;
  @Input() maxWidth: number;
  @Input() maxHeight: number;

  private _host: HTMLElement;

  constructor(
    private _element: ElementRef
  ) {}

  ngOnInit() {
    this._host = this._element.nativeElement;
    const computedStyle = window.getComputedStyle(this._host, null);
    if ( !['absolute', 'relative', 'fixed'].includes(computedStyle.position) ) {
      this._host.style.position = 'relative';
    }
    Object.assign(this._host.style, {
      top: computedStyle.top,
      left: computedStyle.left,
      width: computedStyle.width,
      height: computedStyle.height
    });
    ['minWidth', 'maxWidth', 'minHeight', 'maxHeight'].forEach(
      (prop) => (this[prop] > 0) && (this._host.style[prop] = this[prop] + 'px')
    );
    let array: string[] = [];
    if (this.directions === 'all') {
      array = allDirections;
    } else if (this.directions === 'sides') {
      array = sides;
    } else if (this.directions === 'corners') {
      array = corners;
    } else if (this.directions instanceof Array) {
      array = this.directions.filter( (dir: string) => allDirections.includes(dir) );
    } else if (allDirections.includes(this.directions)) {
      array = [this.directions];
    }
    array.forEach((direction: string) => this._appendGrabber(direction));
  }


  private _appendGrabber(direction: string): void {
    const grabber: HTMLDivElement = document.createElement('div');
    grabber.classList.add('grabber', direction);
    grabber.style.position = 'absolute';
    grabber.style.zIndex = '10';
    grabber.style.opacity = '0';
    if (['top', 'bottom'].includes(direction)) {
      grabber.style.cursor = 'ns-resize';
      grabber.style.width = `calc(100% - ${grabberSize}px)`;
      grabber.style.height = `${grabberSize}px`;
    } else if (['right', 'left'].includes(direction)) {
      grabber.style.cursor = 'ew-resize';
      grabber.style.width = `${grabberSize}px`;
      grabber.style.height = `calc(100% - ${grabberSize}px)`;
    } else {
      grabber.style.width = `${grabberSize}px`;
      grabber.style.height = `${grabberSize}px`;
    }
    let resize: any;
    switch (direction) {
      case 'top':
        grabber.style.top = `-${grabberHalfSize}px`;
        grabber.style.left = `${grabberHalfSize}px`;
        resize = (e: any) => this._resizeTop(e);
        break;
      case 'right':
        grabber.style.top = `${grabberHalfSize}px`;
        grabber.style.left = `calc(100% - ${grabberHalfSize}px)`;
        resize = (e: any) => this._resizeRight(e);
        break;
      case 'bottom':
        grabber.style.top = `calc(100% - ${grabberHalfSize}px)`;
        grabber.style.left = `${grabberHalfSize}px`;
        resize = (e: any) => this._resizeBottom(e);
        break;
      case 'left':
        grabber.style.top = `${grabberHalfSize}px`;
        grabber.style.left = `-${grabberHalfSize}px`;
        resize = (e: any) => this._resizeLeft(e);
        break;
      case 'top-right':
        grabber.style.cursor = 'ne-resize';
        grabber.style.top = `-${grabberHalfSize}px`;
        grabber.style.left = `calc(100% - ${grabberHalfSize}px)`;
        resize = (e: any) => { this._resizeTop(e); this._resizeRight(e); };
        break;
      case 'bottom-right':
        grabber.style.cursor = 'se-resize';
        grabber.style.top = `calc(100% - ${grabberHalfSize}px)`;
        grabber.style.left = `calc(100% - ${grabberHalfSize}px)`;
        resize = (e: any) => { this._resizeBottom(e); this._resizeRight(e); };
        break;
      case 'bottom-left':
        grabber.style.cursor = 'sw-resize';
        grabber.style.top = `calc(100% - ${grabberHalfSize}px)`;
        grabber.style.left = `-${grabberHalfSize}px`;
        resize = (e: any) => { this._resizeBottom(e); this._resizeLeft(e); };
        break;
      case 'top-left':
        grabber.style.cursor = 'nw-resize';
        grabber.style.top = `-${grabberHalfSize}px`;
        grabber.style.left = `-${grabberHalfSize}px`;
        resize = (e: any) => { this._resizeTop(e); this._resizeLeft(e); };
        break;
    }
    grabber.addEventListener('mousedown', (e: any) => {
      const s = fromEvent(document, 'mousemove').subscribe(
        (e: any) => resize(e)
      );
      fromEvent(document, 'mouseup').pipe(take(1)).subscribe(
        (e: any) => s.unsubscribe()
      );
    });
    this._host.append(grabber);
  }


  private _resizeTop(e: any): void {
    const height = parseInt(this._host.style.height) - e.movementY;
    if (
      (!this.minHeight || height >= this.minHeight) &&
      (!this.maxHeight || height <= this.maxHeight)
    ) {
      this._host.style.top = parseInt(this._host.style.top) + e.movementY + 'px';
      this._host.style.height = height + 'px';
    }
  }

  private _resizeRight(e: any): void {
    this._host.style.width = parseInt(this._host.style.width) + e.movementX + 'px';
  }

  private _resizeBottom(e: any): void {
    this._host.style.height = parseInt(this._host.style.height) + e.movementY + 'px';
  }

  private _resizeLeft(e: any): void {
    const width = parseInt(this._host.style.width) - e.movementX;
    if (
      (!this.minWidth || width >= this.minWidth) &&
      (!this.maxWidth || width <= this.maxWidth)
    ) {
      this._host.style.left = parseInt(this._host.style.left) + e.movementX + 'px';
      this._host.style.width = width + 'px';
    }
  }

}
