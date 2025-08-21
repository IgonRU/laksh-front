import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LakshPageArticleComponent } from "../../_layout/page-article/page-article.component";
import { LakshSectionTitleComponent } from "../../_components/section-title/section-title.component";

@Component({
  selector: 'laksh-about-page',
  standalone: true,
  imports: [CommonModule, LakshPageArticleComponent, LakshSectionTitleComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class LakshAboutComponent {
  // Компонент для страницы "О ландшафтной студии"
}
