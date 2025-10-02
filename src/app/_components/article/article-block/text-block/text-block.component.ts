import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LakshProjectBlockData } from '../../../../projects/project-page/_classes/project-block.class';
import { LakshSectionTitleComponent } from "../../../section-title/section-title.component";

@Component({
  selector: 'laksh-text-block',
  standalone: true,
  imports: [CommonModule, LakshSectionTitleComponent],
  templateUrl: './text-block.component.html',
  styleUrls: ['./text-block.component.scss']
})
export class LakshTextBlockComponent {
  data = input.required<LakshProjectBlockData>();
}
