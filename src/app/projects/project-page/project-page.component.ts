import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { LakshPageArticleComponent } from "../../_layout/page-article/page-article.component";
import { Project } from "../project-list/project-card/project-card.component";
import { LakshPagePromoComponent } from "../../_layout/page-promo/page-promo.component";
import { LakshProject } from './_classes/project.class';
import { LeadContentComponent } from "../../_components/lead-content/lead-content.component";
import { LakshProjectPageBlockComponent } from './project-page-block/project-page-block.component';
import { LakshProjectsService } from '../projects.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'laksh-project-page',
  standalone: true,
  imports: [CommonModule, LakshPagePromoComponent, LakshPageArticleComponent, LeadContentComponent, LakshProjectPageBlockComponent],
  templateUrl: './project-page.component.html',
  styleUrl: './project-page.component.scss'
})
export class LakshProjectPageComponent implements OnInit {
  
  project: LakshProject | null = null;
  
  // Тестовые данные проектов (в реальном проекте это будет сервис)
  private projects = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private projectsService: LakshProjectsService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const projectId = params['id'];
      this.loadProject(projectId);
    });
  }

  private loadProject(alias: string) {
    this.projectsService.getProject(alias).subscribe({
      next: (response) => {
        console.log('LakshProjectsComponent loadProjects', response);
        if (response.data) {
          this.project = new LakshProject(response.data);
        }
      },
      error: (error) => {
        console.error('Ошибка загрузки проектов:', error);
        // Оставляем тестовые данные при ошибке
      }
    });
  }

  getImageRoute(image: string): string {
    return environment.backendHost + image;
  }

  showPlantsTotal(): boolean {
    return this.project?.info?.plantsTotal && this.project?.info?.plantsTotal > 0;
  }

  showPlantsList(): boolean {
    return this.project?.info?.plantsList && this.project?.info?.plantsList.length > 0;
  }

  showPlantsStats(): boolean {
    return this.showPlantsTotal() || this.showPlantsList();
  }
}
