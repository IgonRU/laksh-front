import {Component, input} from '@angular/core';
import {LakshHeaderMenuComponent} from "../header-menu/header-menu.component";
import {LakshHeaderMenuItem} from "../header-menu/header-menu-item.class";

@Component({
  selector: 'laksh-page-header',
  standalone: true,
  imports: [
    LakshHeaderMenuComponent
  ],
  templateUrl: './page-header.component.html'
})
export class LakshPageHeaderComponent {

  topMenu = input<LakshHeaderMenuItem[]>([]);

}
