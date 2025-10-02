import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LakshProjectBlockData } from '../../../../projects/project-page/_classes/project-block.class';
import { LakshSectionTitleComponent } from "../../../section-title/section-title.component";
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'laksh-persons-block',
  standalone: true,
  imports: [CommonModule, LakshSectionTitleComponent],
  templateUrl: './persons-block.component.html',
  styleUrls: ['./persons-block.component.scss']
})
export class LakshPersonsBlockComponent {
  data = input.required<LakshProjectBlockData>();

  getImageRoute(image: string | null): string {
    if (!image) return '';
    return environment.backendHost + image;
  }
}

