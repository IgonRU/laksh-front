import { Component, Input, ViewEncapsulation } from '@angular/core';
import { LakshServiceItem } from '../_classes/service-item.class';
import { LakshServiceItemStepComponent } from "../service-item-step/service-item-step.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'laksh-service-item',
  standalone: true,
  imports: [CommonModule, LakshServiceItemStepComponent],
  templateUrl: './service-item.component.html',
  styleUrl: './service-item.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class LakshServiceItemComponent {
  @Input() serviceItem: LakshServiceItem;
}
