import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LakshSectionTitleComponent } from "../../../_components/section-title/section-title.component";
import { LakshService } from '../../../pages/services/_classes/service.class';
import { LakshServiceGroup } from '../../../pages/services/_classes/service-group.class';
import { buildAssetUrl } from '../../../_helpers/asset-url.helper';

@Component({
  selector: 'laksh-services',
  standalone: true,
  imports: [CommonModule, LakshSectionTitleComponent],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  private readonly fallbackServices: LakshServiceGroup[] = [
    new LakshServiceGroup({
      alias: 'design',
      title: 'Проектирование',
      description: 'От анализа участка и концепции — до рабочей документации и ведомостей. Продумываем логику пространства, материалы, инженерные узлы и посадки.',
      image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=2400&q=70',
      services: [
        new LakshService({
          alias: 'concept',
          title: 'Концепция',
          descriptionShort: 'Продумываем логику пространства, материалы, инженерные узлы и посадки.'
        }),
        new LakshService({
          alias: 'design',
          title: 'Рабочая документация',
          descriptionShort: 'Продумываем логику пространства, материалы, инженерные узлы и посадки.'
        })
      ]
    }),
    new LakshServiceGroup({
      alias: 'building',
      title: 'Реализация',
      description: 'Ведём работы под ключ: от подготовки основания и инженерных систем до озеленения и запуска объекта. Работаем по проекту и контролируем качество на каждом этапе.',
      image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=2400&q=70',
      services: [
        new LakshService({
          alias: 'concept',
          title: 'Концепция',
          descriptionShort: 'Продумываем логику пространства, материалы, инженерные узлы и посадки.'
        }),
        new LakshService({
          alias: 'design',
          title: 'Рабочая документация',
          descriptionShort: 'Продумываем логику пространства, материалы, инженерные узлы и посадки.'
        })
      ]
    })
  ];

  private _services: LakshServiceGroup[] = this.fallbackServices;

  @Input()
  set services(value: LakshServiceGroup[] | null | undefined) {
    if (value && value.length) {
      this._services = value;
    } else {
      this._services = this.fallbackServices;
    }
  }

  get services(): LakshServiceGroup[] {
    return this._services;
  }

  getImageUrl(image?: string | null): string {
    return buildAssetUrl(image ?? '');
  }
}