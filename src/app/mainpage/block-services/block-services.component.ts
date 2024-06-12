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
      name: 'novotoksovo',
      title: 'Новотоксово',
      image: '/assets/images/block-portfolio/novotoksovo.jpg',
      route: '/portfolio/novotoksovo',
    }),
    new LakshMainpageBlockItem({
      name: 'dubki',
      title: 'Дубки',
      image: '/assets/images/block-portfolio/dubki.jpg',
      route: '/portfolio/dubki',
    })
  ];

  description = '<p>ЛАКШМИ - ландшафтная студия полного цикла. Мы готовы реализовать проект любой сложности - от небольшого камерного сада до сложного природного пространства с полным спектром технического оснащения.</p>' +
    '<p>Наш основной принцип - сотрудничество должно доставлять удовольствие и нашему клиенту и нам.</p>';

}
