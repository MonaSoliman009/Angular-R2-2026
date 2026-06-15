import { Directive, ElementRef, HostListener, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class Highlight implements OnChanges {

  @Input('defaultColor') defColor: string = "blue"
  @Input('highlightColor') highColor: string = 'brown'
  //  @Input() defaultColor:string="blue"
  //  @Input() highlightColor:string='brown'

  constructor(private ele: ElementRef, private render2: Renderer2) {
    // ele.nativeElement.style.backgroundColor="blue"

  }
  ngOnChanges() {
    this.render2.setStyle(this.ele.nativeElement, 'backgroundColor', this.defColor)
  }

  @HostListener('mouseenter')
  mouseOver() {
    this.render2.setStyle(this.ele.nativeElement, 'backgroundColor', this.highColor)
  }

  @HostListener('mouseleave')
  mouseOut() {
    this.render2.setStyle(this.ele.nativeElement, 'backgroundColor', this.defColor)
  }
}
