import {Component, input} from '@angular/core';
import {RouterModule, Router, NavigationEnd} from '@angular/router';
import {LakshHeaderMenuItem} from "./header-menu-item.class";
import {filter, take} from 'rxjs/operators';

@Component({
  selector: 'laksh-header-menu',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss']
})
export class LakshHeaderMenuComponent {

  menu = input<LakshHeaderMenuItem[]>([]);

  constructor(private router: Router) {}

  getLeftColumn(): LakshHeaderMenuItem[] {
    return this.menu().slice(0, Math.ceil(this.menu().length / 2));
  }

  getRightColumn(): LakshHeaderMenuItem[] {
    return this.menu().slice(Math.ceil(this.menu().length / 2));
  }

  isHashOnlyRoute(route: string | undefined): boolean {
    return !!route && route.startsWith('#');
  }

  containsHash(route: string | undefined): boolean {
    return !!route && route.includes('#');
  }

  onMenuClick(event: MouseEvent, route: string | undefined): void {
    if (!route) { return; }

    // Hash-only: scroll on current page
    if (this.isHashOnlyRoute(route)) {
      event.preventDefault();
      const fragment = route.slice(1);
      this.scrollToFragment(fragment);
      return;
    }

    // Path with hash: "/path#id" or "/#id"
    if (this.containsHash(route)) {
      event.preventDefault();
      const [pathPart, fragment] = route.split('#');
      const targetPath = pathPart || '/';
      const targetFragment = (fragment || '').trim();
      const currentPath = this.getCurrentPath();

      if (currentPath === targetPath) {
        this.scrollToFragment(targetFragment);
      } else {
        // Navigate, wait for NavigationEnd, then scroll
        this.router.navigate([targetPath]).then(navigated => {
          if (!navigated) { return; }
          this.router.events.pipe(
            filter(e => e instanceof NavigationEnd),
            take(1)
          ).subscribe(() => {
            // Give the page a tick to render
            setTimeout(() => this.scrollToFragment(targetFragment), 0);
          });
        });
      }
      return;
    }
    // Plain path: let [routerLink] handle it in template
  }

  private scrollToFragment(fragment: string): void {
    if (!fragment) { return; }
    const element = document.getElementById(fragment);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      try { history.replaceState(null, '', `#${fragment}`); } catch {}
    }
  }

  private getCurrentPath(): string {
    // Remove query and hash from current url
    const url = this.router.url || '';
    const withoutQuery = url.split('?')[0];
    return withoutQuery.split('#')[0] || '/';
  }
}
