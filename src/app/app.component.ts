import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {IgonResponsiveLayoutComponent} from "@igon/responsive-layout";
import {LakshPageFooterComponent} from "./_layout/page-footer/page-footer.component";
import {LakshPageHeaderComponent} from "./_layout/page-header/page-header.component";

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
}
