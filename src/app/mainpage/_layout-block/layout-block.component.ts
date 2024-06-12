import {Component, effect, ElementRef, input, Renderer2} from '@angular/core';
import {LakshMainpageBlockItem} from "../_classes/mainpage-block-item.class";
import {LakshLayoutBlockItemComponent} from "../_layout-block-item/layout-block-item.component";

@Component({
  selector: 'laksh-layout-block',
  standalone: true,
  imports: [
    LakshLayoutBlockItemComponent
  ],
  templateUrl: './layout-block.component.html'
})
export class LakshLayoutBlockComponent {

  title = input<string>('Default Layout Block');
  description = input<string>('Default Layout Block Description');
  items = input<LakshMainpageBlockItem[]>([]);
  class = input<string>('default-layout-block');
  blockType = input<'type1' | 'type2'>('type1');

  constructor(private ref: ElementRef,
              private renderer: Renderer2) {
    effect(() => {
      this.setComponentClass(this.class())
    });
  }

  setComponentClass(className: string): void {
    this.renderer.addClass(this.ref.nativeElement, className);
  }
}
