import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animal-image',
  templateUrl: './animal-image.component.html',
  styleUrls: ['./animal-image.component.css']
})
export class AnimalImageComponent implements OnInit {

  private animalImage = [
    {
      id: 1,
      animalId: 101,
      imageId: 1
    },
    {
      id: 2,
      animalId: 102,
      imageId: 1
    },
    {
      id: 3,
      animalId: 101,
      imageId: 2
    }];

  constructor() { }

  ngOnInit() {
  }

  getAnimalImage() {
    return this.animalImage;
  }

}
