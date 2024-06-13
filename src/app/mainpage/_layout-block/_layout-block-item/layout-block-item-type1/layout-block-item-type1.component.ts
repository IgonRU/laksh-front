import {Component, input} from '@angular/core';
import {LakshMainpageBlockItem} from "../../../_classes/mainpage-block-item.class";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'laksh-layout-block-item-type1',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './layout-block-item-type1.component.html',
  styles: ``
})
export class LakshLayoutBlockItemType1Component {

  item = input<LakshMainpageBlockItem>();

  getBackgroundImage(): string {
    return `url(${this.item().image})`;
  }

}
