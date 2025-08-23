import { Component, OnInit } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import { LakshServiceItemComponent } from "../service-item/service-item.component";
import { LakshServiceItem } from '../_classes/service-item.class';

@Component({
  selector: 'laksh-service-list',
  standalone: true,
  imports: [CommonModule,LakshServiceItemComponent, JsonPipe],
  templateUrl: './service-list.component.html',
  styleUrl: './service-list.component.scss'
})
export class LakshServiceListComponent implements OnInit {

  serviceItems: LakshServiceItem[] = [];

  constructor() {
    this.initializeServiceItems();
  }

  serviceItemsJSON: any[] = [
    {
      title: 'Проектирование',
      description: 'Мы создаем проект, который будет соответствовать вашим потребностям и ожиданиям.',
      image: 'https://via.placeholder.com/1',
      serviceSteps: [
        {
          title: 'Разработка концепции',
          description: 'Мы создаем концепцию, которая будет соответствовать вашим потребностям и ожиданиям.',
          image: 'https://via.placeholder.com/1'
        },
        {
          title: 'Создание дендропроекта',
          description: 'Мы создаем дендропроект, который будет соответствовать вашим потребностям и ожиданиям.',
          image: 'https://via.placeholder.com/2'
        }
      ]
    },
    {
      title: 'Реализация',
      description: 'В нашей компании работают специально подготовленные специалисты, которые смогут реализовать проект любой сложности.',
      image: 'https://via.placeholder.com/2',
      serviceSteps: [
        {
          title: 'Подготовка документации',
          description: 'Мы подготавливаем все необходимые документы для реализации проекта',
          image: 'https://via.placeholder.com/1'
        },
        {
          title: 'План работ и согласование',
          description: 'При необходимости согласуем порядок и объем работы с смежными подрядчиками, работающими на объекте',
          image: 'https://via.placeholder.com/2'
        },
        {
          title: 'Реализация и гарантии',
          description: 'Мы реализуем проект и предоставляем гарантии на выполненные работы',
          image: 'https://via.placeholder.com/3'
        }
      ]
    }
  ];

  private initializeServiceItems(): void {
    this.serviceItems = this.serviceItemsJSON.map(item => new LakshServiceItem(item));
  }

  ngOnInit(): void {
    console.log('ngOnInit called');
    // Дополнительная инициализация если нужна
  }

}
