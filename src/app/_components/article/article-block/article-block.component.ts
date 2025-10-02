import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LakshProjectBlock } from '../../../projects/project-page/_classes/project-block.class';
import { LakshTextBlockComponent } from './text-block/text-block.component';
import { LakshImageBlockComponent } from './image-block/image-block.component';
import { LakshFixedBlockComponent } from './fixed-block/fixed-block.component';
import { LakshGalleryBlockComponent } from './gallery-block/gallery-block.component';
import { LakshPersonsBlockComponent } from './persons-block/persons-block.component';

@Component({
  selector: 'laksh-article-block',
  standalone: true,
  imports: [
    CommonModule,
    LakshTextBlockComponent,
    LakshImageBlockComponent,
    LakshFixedBlockComponent,
    LakshGalleryBlockComponent,
    LakshPersonsBlockComponent
  ],
  templateUrl: './article-block.component.html',
  styleUrl: './article-block.component.scss'
})
export class LakshArticleBlockComponent {
  block = input.required<LakshProjectBlock>();
}
