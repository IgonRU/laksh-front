import {Component, input} from '@angular/core';
import {LakshMainpageBlockItem} from "../../_classes/mainpage-block-item.class";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'laksh-layout-block-item-type2',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './layout-block-item-type2.component.html'
})
export class LakshLayoutBlockItemType2Component {

  item = input<LakshMainpageBlockItem>();

  getBackgroundImage(): string {
    return `url(${this.item().image})`;
  }

}
