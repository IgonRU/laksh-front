import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { LakshPageArticleComponent } from "../../_layout/page-article/page-article.component";
import { Project } from "../project-card/project-card.component";
import { LakshPagePromoComponent } from "../../_layout/page-promo/page-promo.component";
import { LakshProject } from './_classes/project.class';

@Component({
  selector: 'laksh-project-page',
  standalone: true,
  imports: [CommonModule, LakshPagePromoComponent, LakshPageArticleComponent],
  templateUrl: './project-page.component.html',
  styleUrl: './project-page.component.scss'
})
export class LakshProjectPageComponent implements OnInit {
  
  project: LakshProject | null = null;
  
  // Тестовые данные проектов (в реальном проекте это будет сервис)
  private projects: Project[] = [
    {
      id: 1,
      title: 'Парк "Зеленый оазис"',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
      description: 'Современный парк с зонами отдыха, детскими площадками и велосипедными дорожками',
      url: '/projects/green-oasis'
    },
    {
      id: 2,
      title: 'Ботанический сад "Цветущий рай"',
      image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=1200&q=80',
      description: 'Экзотический сад с редкими растениями, оранжереями и зонами медитации',
      url: '/projects/flowering-paradise'
    },
    {
      id: 3,
      title: 'Сквер "Городская весна"',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=80',
      description: 'Уютный сквер в центре города с фонтанами, скамейками и цветочными клумбами',
      url: '/projects/urban-spring'
    },
    {
      id: 4,
      title: 'Ландшафтный парк "Времена года"',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80',
      description: 'Парк с тематическими зонами для каждого сезона года',
      url: '/projects/seasons'
    },
    {
      id: 5,
      title: 'Эко-парк "Природная гармония"',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80',
      description: 'Экологический парк с дикими растениями и природными тропами',
      url: '/projects/natural-harmony'
    }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const projectId = +params['id'];
      this.project = new LakshProject(this.projects.find(p => p.id === projectId)) || null;
      
      if (!this.project) {
        // Если проект не найден, перенаправляем на страницу проектов
        this.router.navigate(['/projects']);
      }
    });
  }
}
