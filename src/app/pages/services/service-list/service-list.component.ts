import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LakshServiceGroupComponent } from "../service-group/service-group.component";
import { LakshServiceGroup } from '../_classes/service-group.class';
import { buildAssetUrl } from '../../../_helpers/asset-url.helper';

@Component({
  selector: 'laksh-service-list',
  standalone: true,
  imports: [CommonModule, LakshServiceGroupComponent],
  templateUrl: './service-list.component.html',
  styleUrl: './service-list.component.scss'
})
export class LakshServiceListComponent implements OnChanges {
  @Input() serviceGroups: LakshServiceGroup[] = [];

  // Индекс открытой услуги для каждой группы (по умолчанию первая услуга в каждой группе)
  openServiceIndexes: number[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['serviceGroups']) {
      this.initializeOpenServiceIndexes();
    }
  }

  private initializeOpenServiceIndexes(): void {
    this.openServiceIndexes = (this.serviceGroups ?? []).map(group =>
      group && group.services && group.services.length > 0 ? 0 : -1
    );
  }

  /**
   * Переключает открытие/закрытие услуги
   */
  toggleService(groupIndex: number, serviceIndex: number): void {
    if (this.openServiceIndexes[groupIndex] === serviceIndex) {
      // Если кликаем на уже открытую услугу - закрываем её
      this.openServiceIndexes[groupIndex] = -1;
    } else {
      // Иначе открываем новую услугу
      this.openServiceIndexes[groupIndex] = serviceIndex;
    }
  }

  /**
   * Проверяет, открыта ли услуга
   */
  isServiceOpen(groupIndex: number, serviceIndex: number): boolean {
    return this.openServiceIndexes[groupIndex] === serviceIndex;
  }

  /**
   * Методы-обертки для передачи в дочерний компонент
   */
  getToggleServiceFunction(): (groupIndex: number, serviceIndex: number) => void {
    return this.toggleService.bind(this);
  }

  getIsServiceOpenFunction(): (groupIndex: number, serviceIndex: number) => boolean {
    return this.isServiceOpen.bind(this);
  }

  getImageUrl(image?: string | null): string {
    return buildAssetUrl(image ?? '');
  }
}
