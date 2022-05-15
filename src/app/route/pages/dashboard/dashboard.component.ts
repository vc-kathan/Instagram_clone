import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  data = [
    {
      img: "https://material.angular.io/assets/img/examples/shiba2.jpg",
      title: "xyz_1122",
      subtitle: "Dog Breed",
      totalLikes: "132",
      detail: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with",
      like: true,
    },
    {
      img: "http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/splash.png",
      title: "Shiba_Inu",
      subtitle: "Dog Breed",
      totalLikes: "8 k",
      detail: "lfs sfs fsfsfsf fsfff",
      like: false,
    }, {
      img: "http://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/car_4.png",
      title: "Rice_ccrr",
      subtitle: "car ",
      totalLikes: "10k",
      detail: "",
      like: true,
    },
  ]
  toggle = true;
  constructor() { }


  ngOnInit(): void {
  }

  likedislike(name: string) {
    for (let i of this.data) {
      if (i.title == name) {
        i.like = !i.like
      }
    }
  }
}
