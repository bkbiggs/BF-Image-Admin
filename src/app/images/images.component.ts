import { Component } from  '@angular/core';

@Component({
    selector: 'app-images',
    templateUrl: './images.component.html'
})
export class ImagesComponent {

    private images = [
        { 
            id: 1,
            image: "image201806220958_pi00.jpg",
            icon: "icon_image201806220958_pi00.jpg",
            description: "Thats a squirrel on *MY* feeder!?!?",
        },
        {
            id: 2,
            image: "image201806220929_pi00.jpg",
            icon: "icon_image201806220929_pi00.jpg",
            description: "new"
        },
        {
            id: 3,
            image: "image201811251053_pi15 jpg",
            icon: "icon_image201811251053_pi15.jpg",
            description: "Feeder #3"      
        },
        {
            id: 4,
            image: "image201807071944_pi15 jpg",
            icon: "icon_image201807071944_pi15.jpg",
            description: "Feeder #2"      
        },
        {
            id: 5,
            image: "BirdFeeder.jpeg",
            icon: "icon_BirdFeeder.jpg",
            description: "Feeder #1"
        }
    ];

    getImages() {
        return this.images;
    }

}