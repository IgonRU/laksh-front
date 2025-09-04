import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LakshProjectListItem } from '../project-list/_classes/project-list-item.class';
import { environment } from '../../../environments/environment';

export interface Project {
  id: number;
  title: string;
  image: string;
  description: string;
  url: string;
}

@Component({
  selector: 'laksh-project-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class LakshProjectCardComponent {
  @Input() project!: LakshProjectListItem;

  getProjectImageUrl(): string {
    return environment.backendHost + this.project.image;
  }
}
