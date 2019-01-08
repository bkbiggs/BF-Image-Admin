import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent implements OnInit {

  private animals = [
    { id: "101",
      cn: [
        "Eastern Gray Squirrel"],
      sn: "Sciurus carolinensis"
    },
    { id: "102",
      cn: [
        "English sparrow",    
        "House sparrow"],
      sn: "Passer domesticus"
    }
  ];

  constructor() { }

  ngOnInit() { }

  getAnimals( ) {
    return this.animals;
  }
}
