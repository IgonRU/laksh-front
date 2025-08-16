import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'laksh-fixed-background-block',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fixed-background-block.component.html',
  styleUrls: ['./fixed-background-block.component.scss']
})
export class LakshFixedBackgroundBlockComponent {
  backgroundImage = input<string>('https://images.unsplash.com/photo-1495954484750-af469f2f9be5?auto=format&fit=crop&w=2000&q=60');
}