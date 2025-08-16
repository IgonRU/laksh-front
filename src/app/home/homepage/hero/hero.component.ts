import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'laksh-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  backgroundImage = "url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=2000&q=60')";
}