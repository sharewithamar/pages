import { Directive, ElementRef, Input } from "@angular/core";

@Directive({
  selector: "[appClass]"
})
export class ClassDirective {
  //@Input() backgroundColor: string;

  constructor(private element: ElementRef) {
    // NEVER DO THIS
    /*     setTimeout(() => {
      this.element.nativeElement.style.backgroundColor = this.backgroundColor;
    }, 50); */
  }

  @Input("appClass") set backgroundColors(color: string) {
    this.element.nativeElement.style.backgroundColor = color;
  }
}
