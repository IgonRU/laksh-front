import { Component } from '@angular/core';
import {LakshLayoutBlockComponent} from "../_layout-block/layout-block.component";
import {LakshMainpageBlockItem} from "../_classes/mainpage-block-item.class";

@Component({
  selector: 'laksh-block-services',
  standalone: true,
  imports: [
    LakshLayoutBlockComponent
  ],
  templateUrl: './block-services.component.html'
})
export class LaksBlockServicesComponent {

  blocks = [
    new LakshMainpageBlockItem({
      name: 'design',
      title: 'ПРОЕКТИРОВАНИЕ',
      image: '/assets/images/block-services/design.jpg',
      route: '/services/design',
      description: `<p>Разработаем для Вас:</p>
                    <ul>
                        <li>Концептуальный проект</li>
                        <li>3D визуализацию</li>
                        <li>Дендропроект</li>
                        <li>Рабочую документацию</li>
                    </ul>`
    }),
    new LakshMainpageBlockItem({
      name: 'implementation',
      title: 'РЕАЛИЗАЦИЯ',
      subtitle: 'АВТОРСКИЙ НАДЗОР',
      image: '/assets/images/block-services/implementation.jpg',
      route: '/services/implementation',
      description: `<p>Воплотим в жизнь:</p>
                    <ul>
                        <li>Планировку участка, инженерные сети</li>
                        <li>Беседки, ограждения, МАФы</li>
                        <li>Высадку растений</li>
                    </ul>
                    <p>Или проследим за качеством работ подряждчиками</p>`
    })
  ];

  description = '<p>ЛАКШМИ - ландшафтная студия полного цикла. Мы готовы реализовать проект любой сложности - от небольшого камерного сада до сложного природного пространства с полным спектром технического оснащения.</p>' +
    '<p>Наш основной принцип - сотрудничество должно доставлять удовольствие и нашему клиенту и нам.</p>';

}
