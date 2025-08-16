import {Component, input} from '@angular/core';
import {LakshHeaderMenuComponent} from "../header-menu/header-menu.component";
import {LakshHeaderMenuItem} from "../header-menu/header-menu-item.class";
import {IgonResponsiveLayoutService} from "@igon/responsive-layout";
import {MatButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {NavStickyComponent} from "../nav-sticky/nav-sticky.component";
import { LakshHeaderCenterMenuComponent } from "./header-conter-menu/header-center-menu.component";
import { LakshHeaderLangSwitchComponent } from "./header-lang-switch/header-lang-switch.component";
import { LakshHeaderLogoComponent } from "./header-logo/header-logo.component";

@Component({
  selector: 'laksh-page-header',
  standalone: true,
  imports: [
    LakshHeaderMenuComponent,
    MatButton,
    MatIcon,
    NavStickyComponent,
    LakshHeaderCenterMenuComponent,
    LakshHeaderLangSwitchComponent,
    LakshHeaderLogoComponent
],
  templateUrl: './page-header.component.html'
})
export class LakshPageHeaderComponent {

  topMenu = input<LakshHeaderMenuItem[]>([]);
  centerMenu = input<LakshHeaderMenuItem[]>([]);

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
