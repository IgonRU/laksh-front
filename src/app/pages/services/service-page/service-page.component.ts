import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { LakshArticleComponent } from '../../../_components/article/article.component';
import { LakshArticle } from '../../../_components/article/_classes/article.class';
import { LakshServicesService } from '../services.service';

@Component({
  selector: 'laksh-service-page',
  standalone: true,
  imports: [CommonModule, LakshArticleComponent],
  templateUrl: './service-page.component.html',
  styleUrls: ['./service-page.component.scss']
})
export class LakshServicePageComponent implements OnInit, OnDestroy {
  serviceArticle: LakshArticle | null = null;
  isLoading = false;
  hasError = false;

  private readonly destroy$ = new Subject<void>();

  constructor(
    private route: ActivatedRoute,
    private servicesService: LakshServicesService
  ) {}

  ngOnInit(): void {
    this.route.params
      .pipe(takeUntil(this.destroy$))
      .subscribe(params => {
        const alias = params['alias'];
        if (alias) {
          this.loadService(alias);
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private loadService(alias: string): void {
    this.isLoading = true;
    this.hasError = false;

    this.servicesService.getService(alias)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          this.serviceArticle = response?.data ? new LakshArticle(response.data) : null;
          this.isLoading = false;
        },
        error: (error) => {
          console.error('Ошибка загрузки услуги:', error);
          this.hasError = true;
          this.isLoading = false;
        }
      });
  }
}


