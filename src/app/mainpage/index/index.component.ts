import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {LakshFrontpageBannerComponent} from "../../_layout/frontpage-banner/frontpage-banner.component";
import {BlockPortfolioComponent} from "../block-portfolio/block-portfolio.component";
import {LaksBlockServicesComponent} from "../block-services/block-services.component";
import {LakshBlockContactsComponent} from "../block-contacts/block-contacts.component";

@Component({
  selector: 'laksh-index',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, LakshFrontpageBannerComponent, BlockPortfolioComponent, LaksBlockServicesComponent, LakshBlockContactsComponent],
  templateUrl: './index.component.html'
})
export class LakshIndexComponent {

}
