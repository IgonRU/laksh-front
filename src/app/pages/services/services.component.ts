import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LakshPageTitleComponent } from "../../_components/page-title/page-title.component";

@Component({
  selector: 'laksh-services',
  standalone: true,
  imports: [CommonModule, LakshPageTitleComponent],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  // Компонент для страницы с услугами компании
}
