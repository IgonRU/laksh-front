import { Component, input, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LakshProjectBlockData } from '../../../../projects/project-page/_classes/project-block.class';
import { LakshFixedBackgroundBlockComponent } from "../../../fixed-background-block/fixed-background-block.component";
import { LakshSectionTitleComponent } from "../../../section-title/section-title.component";
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'laksh-fixed-block',
  standalone: true,
  imports: [CommonModule, LakshFixedBackgroundBlockComponent, LakshSectionTitleComponent],
  templateUrl: './fixed-block.component.html',
  styleUrls: ['./fixed-block.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LakshFixedBlockComponent {
  data = input.required<LakshProjectBlockData>();

  getImageRoute(image: string): string {
    return environment.backendHost + image;
  }
}
