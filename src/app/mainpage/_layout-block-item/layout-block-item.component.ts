import {Component, input} from '@angular/core';
import {LakshMainpageBlockItem} from "../_classes/mainpage-block-item.class";
import {RouterLink} from "@angular/router";
import {LakshLayoutBlockItemType1Component} from "./layout-block-item-type1/layout-block-item-type1.component";
import {LakshLayoutBlockItemType2Component} from "./layout-block-item-type2/layout-block-item-type2.component";

@Component({
  selector: 'laksh-layout-block-item',
  standalone: true,
  imports: [
    LakshLayoutBlockItemType1Component,
    LakshLayoutBlockItemType2Component
  ],
  templateUrl: './layout-block-item.component.html'
})
export class LakshLayoutBlockItemComponent {

  blockType = input<'type1' | 'type2'>('type1');
  item = input<LakshMainpageBlockItem>();

  getBackgroundImage(): string {
    return `url(${this.item().image})`;
  }

}
