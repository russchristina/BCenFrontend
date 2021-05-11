import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  
  pix = [
    {
      name: "bcen-banner-regular.jpg",
      alt: "BCen Logo"
    },
    {
      name: "anton-maksimov-juvnsky-3jDZM3rgpz8-unsplash.jpg",
      alt: "Nier Automata robot"
    },
    {
      name: "deadmau5-clan.jpg",
      alt: "Blue the Deadmau5 with friends from ACen"
    },
    {
      name: "gracia-dharma-qTlbO6mkQH0-unsplash.jpg",
      alt: "Hands putting up an anime photo on the wall"
    },
    {
      name: "matoki-mask.jpg",
      alt: "Tatsmato mask craft"
    },
    {
      name: "pat-krupa-Of2rc0KOfVU-unsplash.jpg",
      alt: "Akihabara at night with anime bilboards lit up"
    },
    {
      name: "samuel-berner-kcvEQb7GXZc-unsplash.jpg",
      alt: "dark photo of Totoro"
    }
  ]
  constructor() { }
  
  ngOnInit(): void {
    
  }

}
