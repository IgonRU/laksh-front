import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LakshPagePromoComponent } from "../../_layout/page-promo/page-promo.component";
import { LakshPageArticleComponent } from "../../_layout/page-article/page-article.component";
import { LakshArticle } from './_classes/article.class';
import { LakshArticleTemplate } from './_classes/article-template.enum';
import { LeadContentComponent } from "../lead-content/lead-content.component";
import { LakshArticleBlockComponent } from './article-block/article-block.component';
import { environment } from '../../../environments/environment';
import { isEmpty } from 'rxjs';

@Component({
  selector: 'laksh-article',
  standalone: true,
  imports: [CommonModule, LakshPagePromoComponent, LakshPageArticleComponent, LeadContentComponent, LakshArticleBlockComponent],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class LakshArticleComponent {
  article = input.required<LakshArticle>();
  
  // Делаем enum доступным в шаблоне
  readonly ArticleTemplate = LakshArticleTemplate;

  templateType(): string {
    return this.article().template || LakshArticleTemplate.ARTICLE;
  }

  getImageRoute(image: string): string {
    return environment.backendHost + image;
  }

  displayArticleDetails(): boolean {
    return Boolean(
      (this.article().slogan && this.article().slogan.trim()) ||
      (this.article().description && this.article().description.trim())
    );
  }
}
