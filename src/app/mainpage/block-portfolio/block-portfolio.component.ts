import { Component } from '@angular/core';
import {LakshLayoutBlockComponent} from "../_layout-block/layout-block.component";
import {LakshMainpageBlockItem} from "../_classes/mainpage-block-item.class";

@Component({
  selector: 'laksh-block-portfolio',
  standalone: true,
  imports: [
    LakshLayoutBlockComponent
  ],
  templateUrl: './block-portfolio.component.html'
})
export class BlockPortfolioComponent {

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
    }),
    new LakshMainpageBlockItem({
      name: 'sad-kamney',
      title: 'Сад камней',
      image: '/assets/images/block-portfolio/sad-kamney.jpg',
      route: '/portfolio/sad-kamney',
    }),
    new LakshMainpageBlockItem({
      name: 'yuzny-sad',
      title: 'Южный сад',
      image: '/assets/images/block-portfolio/yuzny-sad.jpg',
      route: '/portfolio/yuzny-sad',
    })
  ];

}
