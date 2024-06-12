import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {LakshFrontpageBannerComponent} from "../../_layout/frontpage-banner/frontpage-banner.component";
import {BlockPortfolioComponent} from "../block-portfolio/block-portfolio.component";
import {LaksBlockServicesComponent} from "../block-services/block-services.component";

@Component({
  selector: 'laksh-index',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, LakshFrontpageBannerComponent, BlockPortfolioComponent, LaksBlockServicesComponent],
  templateUrl: './index.component.html'
})
export class LakshIndexComponent {

}
