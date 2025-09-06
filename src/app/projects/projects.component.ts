import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LakshPageArticleComponent } from "../_layout/page-article/page-article.component";
import { LakshProjectsService } from './projects.service';
import { LakshProjectListComponent } from "./project-list/project-list.component";
import { LakshProjectList } from './project-list/_classes/project-list.class';
import { LakshProjectListItem } from './project-list/_classes/project-list-item.class';

@Component({
  selector: 'laksh-projects',
  standalone: true,
  imports: [CommonModule, RouterModule, LakshPageArticleComponent, LakshProjectListComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class LakshProjectsComponent implements OnInit {
  
  projectList: LakshProjectList = new LakshProjectList({
    items: [
      new LakshProjectListItem({
        id: 1,
        title: 'Парк "Зеленый оазис"',
        image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
        description: 'Современный парк с зонами отдыха, детскими площадками и велосипедными дорожками',
        alias: 'green-oasis'
      }),
      new LakshProjectListItem({
        id: 2,
        title: 'Ботанический сад "Цветущий рай"',
        image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=800&q=80',
        description: 'Экзотический сад с редкими растениями, оранжереями и зонами медитации',
        alias: 'flowering-paradise'
      }),
      new LakshProjectListItem({
        id: 3,
        title: 'Сквер "Городская весна"',
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80',
        description: 'Уютный сквер в центре города с фонтанами, скамейками и цветочными клумбами',
        alias: 'urban-spring'
      }),
      new LakshProjectListItem({
        id: 4,
        title: 'Ландшафтный парк "Времена года"',
        image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80',
        description: 'Парк с тематическими зонами для каждого сезона года',
        alias: 'seasons'
      }),
      new LakshProjectListItem({
        id: 5,
        title: 'Эко-парк "Природная гармония"',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80',
        description: 'Экологический парк с дикими растениями и природными тропами',
        alias: 'natural-harmony'
      }),
    ]
  });

  constructor(private projectsService: LakshProjectsService) {}

  ngOnInit() {
    this.loadProjects();
  }

  private loadProjects() {
    this.projectsService.getProjectList().subscribe({
      next: (response) => {
        console.log('LakshProjectsComponent loadProjects', response);
        if (response.data) {
          this.projectList = new LakshProjectList({items: response.data});
          console.log('LakshProjectsComponent projectList', this.projectList);
        }
      },
      error: (error) => {
        console.error('Ошибка загрузки проектов:', error);
        // Оставляем тестовые данные при ошибке
      }
    });
  }
}
