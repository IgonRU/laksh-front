import { Component, OnInit, OnDestroy, signal, Inject } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { Subscription } from 'rxjs';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { IgonResponsiveLayoutComponent } from "@igon/responsive-layout";
import { LakshPageFooterComponent } from "./_layout/page-footer/page-footer.component";
import { LakshPageHeaderComponent } from "./_layout/page-header/page-header.component";
import { LakshHeaderMenuItem } from "./_layout/page-header/header-menu/header-menu-item.class";
import { LakshMobileMenuComponent } from "./_layout/page-header/mobile-menu/mobile-menu.component";
import { MobileMenuService } from "./_layout/page-header/mobile-menu/mobile-menu.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    IgonResponsiveLayoutComponent,
    LakshPageFooterComponent,
    LakshPageHeaderComponent,
    LakshMobileMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();
  isMobileMenuOpen = signal(false);
  private readonly isBrowser: boolean;

  constructor(
    private mobileMenuService: MobileMenuService,
    private router: Router,
    @Inject(PLATFORM_ID) platformId: Object,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  menu: LakshHeaderMenuItem[] = [
    new LakshHeaderMenuItem({
      name: 'about-us',
      title: 'О нас',
      route: '/about'
    }),
    new LakshHeaderMenuItem({
      name: 'projects',
      title: 'Проекты',
      route: '/projects'
    }),
    new LakshHeaderMenuItem({
      name: 'services',
      title: 'Услуги',
      route: '/services'
    }),
    new LakshHeaderMenuItem({
      name: 'contacts',
      title: 'Контакты',
      route: '#contacts'
    }),
  ];

  menuCenter: LakshHeaderMenuItem[] = [
    new LakshHeaderMenuItem({
      name: 'portfolio',
      title: 'ПОРТФОЛИО',
      route: '/projects'
    }),
    new LakshHeaderMenuItem({
      name: 'plant',
      title: 'ПИТОМНИК',
      route: '/#plant'
    })
  ];

  ngOnInit(): void {
    // Подписываемся на изменения состояния мобильного меню
    this.subscription.add(
      this.mobileMenuService.isOpen$.subscribe(isOpen => {
        this.isMobileMenuOpen.set(isOpen);
      })
    );

    // Сбрасываем скролл в контейнере лэйаута при навигации без якоря
    this.subscription.add(
      this.router.events
        .pipe(filter(e => e instanceof NavigationEnd))
        .subscribe((e) => {
          const url = (e as NavigationEnd).urlAfterRedirects || (e as NavigationEnd).url || '';
          if (url.includes('#')) { return; }
          if (!this.isBrowser) { return; }
          setTimeout(() => {
            const layout = this.document.querySelector('igon-responsive-layout.layout-full') as HTMLElement | null;
            if (layout && typeof layout.scrollTo === 'function') {
              layout.scrollTo({ top: 0, left: 0, behavior: 'auto' });
            } else if (layout) {
              (layout as any).scrollTop = 0;
              (layout as any).scrollLeft = 0;
            } else {
              this.document.defaultView?.scrollTo({ top: 0, left: 0, behavior: 'auto' });
            }
          }, 0);
        })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  // Методы управления мобильным меню
  toggleMobileMenu(): void {
    this.mobileMenuService.toggle();
  }

  closeMobileMenu(): void {
    this.mobileMenuService.close();
  }

}
