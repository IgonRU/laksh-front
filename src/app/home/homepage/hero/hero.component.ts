import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LakshFixedBackgroundBlockComponent } from "../../../_components/fixed-background-block/fixed-background-block.component";

@Component({
  selector: 'laksh-hero',
  standalone: true,
  imports: [CommonModule, LakshFixedBackgroundBlockComponent],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  backgroundImage = "url('/assets/images/mainpage/mainpage-image-1.jpg')";

  backgroundImages: string[] = [
    "url('/assets/images/mainpage/mainpage-image-1.jpg')",
    "url('/assets/images/mainpage/mainpage-image-2.jpg')"
  ];

  ngOnInit(): void {
    this.backgroundImage = this.backgroundImages[Math.floor(Math.random() * this.backgroundImages.length)];
  }
}