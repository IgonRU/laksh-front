import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {IgonResponsiveLayoutComponent} from "@igon/responsive-layout";
import {LakshPageFooterComponent} from "./_layout/page-footer/page-footer.component";
import {LakshPageHeaderComponent} from "./_layout/page-header/page-header.component";
import {LakshHeaderMenuItem} from "./_layout/page-header/header-menu/header-menu-item.class";

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
      title: 'О ландшафтной студии',
      route: '/#about-us'
    }),
    new LakshHeaderMenuItem({
      name: 'projects',
      title: 'Проекты студии',
      route: '/#projects'
    }),
    new LakshHeaderMenuItem({
      name: 'services',
      title: 'Услуги компании',
      route: '/#services'
    }),
    new LakshHeaderMenuItem({
      name: 'contacts',
      title: 'Как с нами связаться',
      route: '/#contacts'
    }),
  ];

  menuCenter: LakshHeaderMenuItem[] = [
    new LakshHeaderMenuItem({
      name: 'portfolio',
      title: 'ПОРТФОЛИО',
      route: '/#portfolio'
    }),
    new LakshHeaderMenuItem({
      name: 'plant',
      title: 'ПИТОМНИК',
      route: '/#plant'
    })
  ];

}
