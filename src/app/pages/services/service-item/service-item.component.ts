import { Component, Input, ViewEncapsulation } from '@angular/core';
import { LakshServiceItem } from '../_classes/service-item.class';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'laksh-service-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service-item.component.html',
  styleUrl: './service-item.component.scss',
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('slideDown', [
      transition(':enter', [
        style({ 
          height: '0px', 
          opacity: 0, 
          overflow: 'hidden',
          paddingTop: '0',
          paddingBottom: '0'
        }),
        animate('300ms ease-out', style({ 
          height: '*', 
          opacity: 1,
          paddingTop: '*',
          paddingBottom: '*'
        }))
      ]),
      transition(':leave', [
        style({ 
          height: '*', 
          opacity: 1,
          overflow: 'hidden',
          paddingTop: '*',
          paddingBottom: '*'
        }),
        animate('300ms ease-in', style({ 
          height: '0px', 
          opacity: 0,
          paddingTop: '0',
          paddingBottom: '0'
        }))
      ])
    ])
  ]
})
export class LakshServiceItemComponent {
  @Input() serviceItem: LakshServiceItem;
  @Input() serviceIndex: number;
  @Input() toggleStep: (serviceIndex: number, stepIndex: number) => void;
  @Input() isStepOpen: (serviceIndex: number, stepIndex: number) => boolean;
}
