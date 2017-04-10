import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[selectWin]'
})
export class WinDirective {
  @HostBinding('class.is-winner') isWin = false;

  @HostBinding('class.is-winner-hovering') hovering = false;

  @HostListener('mouseenter') onMouseEnter() {
    this.hovering = true;
    console.log("hover");
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hovering = false;
  }
  @Input() set selectWin(value) {
    this.isWin = value;
  }
}
