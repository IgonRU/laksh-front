import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LakshPageArticleComponent } from "../../_layout/page-article/page-article.component";
import { LakshSectionTitleComponent } from "../../_components/section-title/section-title.component";
import { LakshAboutPersonComponent } from "./laksh-about-person/laksh-about-person.component";
import { LakshPerson } from '../../_classes/laksh-person.class';

@Component({
  selector: 'laksh-about-page',
  standalone: true,
  imports: [CommonModule, LakshPageArticleComponent, LakshSectionTitleComponent, LakshAboutPersonComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class LakshAboutComponent implements OnInit {
  aboutUsPersopnsJSPN = [
    {
      "id": 1,
      "portrait": "/assets/images/about-us/helen.jpeg",
      "name": "ЕЛЕНА",
      "title": "ЛАНДШАФТНЫЙ АРХИТЕКТОР",
      "role": "Основатель и творческий директор",
      "biography": "Более 5 лет опыта в ландшафтном дизайне - про гармонию, атмосферу и микробики. Разговаривает с растениями. Выпускник школы Сосновки"
    },
    {
      "id": 2,
      "portrait": "/assets/images/about-us/portrait.png",
      "name": "СТАНИСЛАВ",
      "title": "РУКОВОДИТЕЛЬ",
      "role": "Основатель, технический директор",
      "biography": "Более 20 лет опыта в руководстве проектами. Маркетинг, работа с клиентами и подрядчиками, технические вопросы."
    }
  ];

  aboutUsPersons: LakshPerson[] = [];

  ngOnInit(): void {
    this.aboutUsPersons = this.aboutUsPersopnsJSPN.map(person => new LakshPerson(person));
  }
}
