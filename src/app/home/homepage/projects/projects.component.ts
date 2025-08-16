import { Component, OnInit, AfterViewInit, OnDestroy, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';

export interface Project {
  id: number;
  title: string;
  image: string;
}

@Component({
  selector: 'laksh-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, AfterViewInit, OnDestroy {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  projects: Project[] = [
    {
      id: 1,
      title: 'Проект 1 — Сосновый бор',
      image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2400&q=70'
    },
    {
      id: 2,
      title: 'Проект 2 — Береговая линия',
      image: 'https://images.unsplash.com/photo-1459664018906-085c36f472af?auto=format&fit=crop&w=2400&q=70'
    },
    {
      id: 3,
      title: 'Проект 3 — Дача у озера',
      image: 'https://images.unsplash.com/photo-1493246318656-5bfd4cfb29b8?auto=format&fit=crop&w=2400&q=70'
    },
    {
      id: 4,
      title: 'Проект 4 — Каменный сад',
      image: 'https://images.unsplash.com/photo-1495954484750-af469f2f9be5?auto=format&fit=crop&w=2400&q=70'
    }
  ];

  currentIndex = 0;
  get lastIndex(): number { return Math.max(0, this.projects.length - 1); }

  prev(): void { this.currentIndex = Math.max(0, this.currentIndex - 1); }
  next(): void { this.currentIndex = Math.min(this.lastIndex, this.currentIndex + 1); }
  goTo(index: number): void { this.currentIndex = Math.max(0, Math.min(this.lastIndex, index)); }

  ngOnInit(): void {
    // Инициализация
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.updateSlideVisibility();
    }
  }

  ngOnDestroy(): void {
    // Очистка при уничтожении компонента
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.updateSlideVisibility();
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.updateSlideVisibility();
    }
  }

  private updateSlideVisibility(): void {
    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide: Element) => {
      const rect = slide.getBoundingClientRect();
      
      // Проверяем, находится ли слайд в области видимости
      const isInView = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;
      if (isInView) {
        slide.classList.add('in-view');
      }
    });
  }
}