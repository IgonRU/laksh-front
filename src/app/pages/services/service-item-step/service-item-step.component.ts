import { Component, Input, ViewEncapsulation } from '@angular/core';
import { LakshServiceStep } from '../_classes/service-step.class';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'laksh-service-item-step',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service-item-step.component.html',
  styleUrl: './service-item-step.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class LakshServiceItemStepComponent {
  @Input() step: LakshServiceStep;
}
