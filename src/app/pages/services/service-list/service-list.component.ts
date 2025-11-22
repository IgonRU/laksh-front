import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LakshServiceGroupComponent } from "../service-group/service-group.component";
import { LakshServiceGroup } from '../_classes/service-group.class';

@Component({
  selector: 'laksh-service-list',
  standalone: true,
  imports: [CommonModule, LakshServiceGroupComponent],
  templateUrl: './service-list.component.html',
  styleUrl: './service-list.component.scss'
})
export class LakshServiceListComponent implements OnInit {

  serviceGroups: LakshServiceGroup[] = [];
  
  // Индекс открытой услуги для каждой группы (по умолчанию первая услуга в каждой группе)
  openServiceIndexes: number[] = [];

  constructor() {
    this.initializeServiceGroups();
  }

  serviceGroupsJSON: any[] = [
    {
      title: 'Проектирование',
      description: 'Мы создаем проект, который будет соответствовать вашим потребностям и ожиданиям.',
      image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=2400&q=70',
      services: [
        {
          title: 'Разработка концепции',
          description: 'Мы создаем концепцию, которая будет соответствовать вашим потребностям и ожиданиям. Мы создаем концепцию, которая будет соответствовать вашим потребностям и ожиданиям. Мы создаем концепцию, которая будет соответствовать вашим потребностям и ожиданиям. Мы создаем концепцию, которая будет соответствовать вашим потребностям и ожиданиям.Мы создаем концепцию, которая будет соответствовать вашим потребностям и ожиданиям. Мы создаем концепцию, которая будет соответствовать вашим потребностям и ожиданиям.Мы создаем концепцию, которая будет соответствовать вашим потребностям и ожиданиям. Мы создаем концепцию, которая будет соответствовать вашим потребностям и ожиданиям.',
          image: 'https://via.placeholder.com/1',
          linkLabel: 'Подробнее про разработку концепции',
          linkUrl: 'https://www.google.com'
        },
        {
          title: 'Создание дендропроекта',
          description: 'Мы создаем дендропроект, который будет соответствовать вашим потребностям и ожиданиям.',
          image: 'https://via.placeholder.com/2',
          linkLabel: 'Узнать что такое дендропроект',
          linkUrl: 'https://www.google.com'
        }
      ]
    },
    {
      title: 'Реализация',
      description: 'В нашей компании работают специально подготовленные специалисты, которые смогут реализовать проект любой сложности.',
      image: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62?auto=format&fit=crop&w=2400&q=70',
      services: [
        {
          title: 'Подготовка документации',
          description: 'Мы подготавливаем все необходимые документы для реализации проекта',
          image: 'https://via.placeholder.com/1',
          linkLabel: 'Подробнее',
          linkUrl: 'https://www.google.com'
        },
        {
          title: 'План работ и согласование',
          description: 'При необходимости согласуем порядок и объем работы с смежными подрядчиками, работающими на объекте',
          image: 'https://via.placeholder.com/2',
          linkLabel: 'Подробнее',
          linkUrl: 'https://www.google.com'
        },
        {
          title: 'Реализация и гарантии',
          description: 'Мы реализуем проект и предоставляем гарантии на выполненные работы',
          image: 'https://via.placeholder.com/3',
          linkLabel: 'Подробнее',
          linkUrl: 'https://www.google.com'
        }
      ]
    }
  ];

  private initializeServiceGroups(): void {
    this.serviceGroups = this.serviceGroupsJSON.map(item => new LakshServiceGroup(item));
    // Инициализируем открытые услуги - по умолчанию первая услуга (индекс 0) в каждой группе
    this.openServiceIndexes = this.serviceGroups.map(() => 0);
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

  ngOnInit(): void {
    console.log('ngOnInit called');
    // Дополнительная инициализация если нужна
  }

}
