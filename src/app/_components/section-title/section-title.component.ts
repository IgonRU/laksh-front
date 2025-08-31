import { Component, input, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'laksh-section-title',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section-title.component.html',
  styleUrls: ['./section-title.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LakshSectionTitleComponent {
  title = input<string>('');
  subtitle = input<string>('');
}
