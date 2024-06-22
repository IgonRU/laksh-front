import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {IgonResponsiveLayoutComponent} from "@igon/responsive-layout";
import {LakshPageFooterComponent} from "./_layout/page-footer/page-footer.component";
import {LakshPageHeaderComponent} from "./_layout/page-header/page-header.component";
import {LakshHeaderMenuItem} from "./_layout/header-menu/header-menu-item.class";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    IgonResponsiveLayoutComponent,
    LakshPageFooterComponent,
    LakshPageHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  menu: LakshHeaderMenuItem[] = [
    new LakshHeaderMenuItem({
      name: 'about-us',
      title: 'О НАС',
      route: '/#about-us'
    }),
    new LakshHeaderMenuItem({
      name: 'portfolio',
      title: 'ПОРТФОЛИО',
      route: '/#portfolio'
    }),
    new LakshHeaderMenuItem({
      name: 'services',
      title: 'УСЛУГИ',
      route: '/#services'
    }),
    new LakshHeaderMenuItem({
      name: 'contacts',
      title: 'КОНТАКТЫ',
      route: '/#contacts'
    }),
  ];

}
