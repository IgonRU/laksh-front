import { Component, input, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LakshFixedBackgroundBlockComponent } from "../../../_components/fixed-background-block/fixed-background-block.component";
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'laksh-hero',
  standalone: true,
  imports: [CommonModule, LakshFixedBackgroundBlockComponent],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  heroImage = computed(() => {
    const list = this.heroImages();
    if (!Array.isArray(list) || list.length === 0) return '';
    const pick = list[Math.floor(Math.random() * list.length)];
    if (!pick) return 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=2000&q=60';
    return this.getImageRoute(pick);
  });
  heroImages = input<string[]>([]);

  getImage(): string {
    // Оставлено для совместимости, но не используется в шаблоне
    const list = this.heroImages();
    if (!Array.isArray(list) || list.length === 0) return '';
    const pick = list[Math.floor(Math.random() * list.length)];
    if (!pick) return '';
    return this.getImageRoute(pick);
  }

  getImageRoute(image: string): string {
    return environment.backendHost + image;
  }
}