import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LakshArticleComponent } from "../../_components/article/article.component";
import { LakshArticle } from '../../_components/article/_classes/article.class';
import { LakshAboutService } from './about.service';

@Component({
  selector: 'laksh-about-page',
  standalone: true,
  imports: [CommonModule, LakshArticleComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class LakshAboutComponent implements OnInit {
  aboutData: LakshArticle | null = null;

  constructor(private aboutService: LakshAboutService) {}

  ngOnInit(): void {
    this.loadAboutData();
  }

  private loadAboutData(): void {
    this.aboutService.getAboutPage().subscribe({
      next: (response) => {
        console.log('LakshAboutComponent loadAboutData', response);
        if (response.data) {
          this.aboutData = new LakshArticle(response.data);
        }
      },
      error: (error) => {
        console.error('Ошибка загрузки данных страницы "О нас":', error);
      }
    });
  }
}
