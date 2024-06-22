import {Component, input} from '@angular/core';
import {LakshHeaderMenuComponent} from "../header-menu/header-menu.component";
import {LakshHeaderMenuItem} from "../header-menu/header-menu-item.class";
import {IgonResponsiveLayoutService} from "@igon/responsive-layout";
import {MatButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'laksh-page-header',
  standalone: true,
  imports: [
    LakshHeaderMenuComponent,
    MatButton,
    MatIcon
  ],
  templateUrl: './page-header.component.html'
})
export class LakshPageHeaderComponent {

  topMenu = input<LakshHeaderMenuItem[]>([]);

  constructor(private responsiveService: IgonResponsiveLayoutService) {

  }


  showMenu(): boolean {
    return this.responsiveService.isWeb()
  }

  showMenuToggler(): boolean {
    return !this.showMenu();
  }

  showContacts(): boolean {
    return this.responsiveService.isWeb() || this.responsiveService.isTablet();
  }
}
