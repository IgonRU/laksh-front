import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LakshProjectList } from './_classes/project-list.class';
import { LakshProjectCardComponent } from "../project-card/project-card.component";

@Component({
  selector: 'laksh-project-list',
  standalone: true,
  imports: [CommonModule, RouterModule, LakshProjectCardComponent],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.scss'
})
export class LakshProjectListComponent {
  projectList = input<LakshProjectList>();

}
