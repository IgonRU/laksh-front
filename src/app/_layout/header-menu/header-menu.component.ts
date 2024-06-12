import {Component, input} from '@angular/core';
import {LakshHeaderMenuItem} from "./header-menu-item.class";

@Component({
  selector: 'laksh-header-menu',
  standalone: true,
  imports: [],
  templateUrl: './header-menu.component.html'
})
export class LakshHeaderMenuComponent {

  menu = input<LakshHeaderMenuItem[]>([]);



}
