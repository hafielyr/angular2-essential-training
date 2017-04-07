import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[mwImage]'
})
export class ImageDirective {
  @HostBinding('class.is-Show') isShow = false;

  @Input() set mwImage(value) {
    this.isShow = value;
  }
}
