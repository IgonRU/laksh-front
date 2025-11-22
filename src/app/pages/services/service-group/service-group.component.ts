import { Component, Input, ViewEncapsulation, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { LakshServiceGroup } from '../_classes/service-group.class';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'laksh-service-group',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service-group.component.html',
  styleUrl: './service-group.component.scss',
  encapsulation: ViewEncapsulation.None,

})
export class LakshServiceGroupComponent implements AfterViewInit {
  @Input() serviceGroup: LakshServiceGroup;
  @Input() groupIndex: number;
  @Input() toggleService: (groupIndex: number, serviceIndex: number) => void;
  @Input() isServiceOpen: (groupIndex: number, serviceIndex: number) => boolean;
  
  @ViewChild('serviceGroupItems', { static: false }) serviceGroupItems: ElementRef<HTMLDivElement>;

  private isAnimating = false;

  ngAfterViewInit(): void {
    // Инициализация после отрисовки шаблона
  }

  formatServiceNumber(serviceNumber: number): string {
    return serviceNumber.toString().padStart(2, '0');
  }

  onServiceClick(serviceIndex: number): void {
    if (this.isAnimating) return;

    const container = this.serviceGroupItems?.nativeElement;
    if (!container) {
      this.toggleService(this.groupIndex, serviceIndex);
      return;
    }

    // Получаем родительский контейнер service-group-wrapper
    const wrapper = container.closest('.service-group-wrapper') as HTMLElement;
    const serviceGroupContainer = wrapper?.closest('.service-group-container') as HTMLElement;
    
    // FLIP техника: сохраняем позиции всех следующих элементов
    const allContainers = Array.from(document.querySelectorAll('.service-group-container'));
    const currentIndex = allContainers.indexOf(serviceGroupContainer);
    const nextContainers = allContainers.slice(currentIndex + 1) as HTMLElement[];
    
    // Сохраняем текущие позиции (First)
    const firstPositions = nextContainers.map(el => ({
      el,
      top: el.getBoundingClientRect().top
    }));

    // Выполняем переключение
    this.toggleService(this.groupIndex, serviceIndex);

    // Ждем следующий фрейм для измерения новой высоты
    requestAnimationFrame(() => {
      // Измеряем новые позиции элементов (Last)
      const lastPositions = nextContainers.map((el, i) => ({
        el,
        top: el.getBoundingClientRect().top,
        delta: firstPositions[i].top - el.getBoundingClientRect().top
      }));

      // Инвертируем: сдвигаем элементы обратно на старые позиции (Invert)
      lastPositions.forEach(({ el, delta }) => {
        el.style.transform = `translateY(${delta}px)`;
        el.style.transition = 'none';
      });

      // Начинаем анимацию (Play)
      requestAnimationFrame(() => {
        this.isAnimating = true;
        
        // Анимируем возврат элементов на новые позиции
        lastPositions.forEach(({ el }) => {
          el.style.transition = 'transform 0.5s ease';
          el.style.transform = 'translateY(0)';
        });

        // Убираем стили после анимации
        setTimeout(() => {
          lastPositions.forEach(({ el }) => {
            el.style.transform = '';
            el.style.transition = '';
          });
          
          this.isAnimating = false;
        }, 500);
      });
    });
  }
}

