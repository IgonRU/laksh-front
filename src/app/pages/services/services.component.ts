import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LakshPageArticleComponent } from "../../_layout/page-article/page-article.component";
import { LeadContentComponent } from "../../_components/lead-content/lead-content.component";
import { LakshServiceListComponent } from "./service-list/service-list.component";
import { LakshServicesService } from "./services.service";
import { LakshServiceGroup } from "./_classes/service-group.class";

@Component({
  selector: 'laksh-services',
  standalone: true,
  imports: [CommonModule, LakshPageArticleComponent, LeadContentComponent, LakshServiceListComponent],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class LakshServicesComponent implements OnInit {
  serviceGroups: LakshServiceGroup[] = [];

  private readonly fallbackServiceGroupsData = [
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

  constructor(private servicesService: LakshServicesService) {
    this.serviceGroups = this.mapToServiceGroups(this.fallbackServiceGroupsData);
  }

  ngOnInit(): void {
    this.loadServiceGroups();
  }

  private loadServiceGroups(): void {
    this.servicesService.getServiceGroups().subscribe({
      next: (response) => {
        if (response?.data) {
          this.serviceGroups = this.mapToServiceGroups(response.data);
        }
      },
      error: (error) => {
        console.error('Ошибка загрузки услуг:', error);
        // Используем fallback данные
      }
    });
  }

  private mapToServiceGroups(data: any[]): LakshServiceGroup[] {
    return (data ?? []).map(item => new LakshServiceGroup(item));
  }
}
