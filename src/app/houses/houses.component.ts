import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})


export class HousesComponent implements OnInit {

isMansions:boolean = false;
isContemporarys:boolean = false;

mansions= [
  {
    name: "mansion 1", 
    cost: "300",
    pic:"https://townsquare.media/site/204/files/2018/08/spectacular-celebrity-homes.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89"
  },
  {
    name: "mansion 2",
    cost: "4000",
    pic: "https://loveincorporated.blob.core.windows.net/contentimages/gallery/831252a3-610e-4352-b0e9-5fddfdbc99fb-a31b0271-4a6d-4cd0-a094-1884d0bb5a88-the-most-magnificent-mansions-for-sale-in-every-state-wisconsin.jpg"
  },
  {
    name: "mansion 3",
    cost: "10000",
    pic: "https://i.ytimg.com/vi/MARPpXuTi7k/maxresdefault.jpg"
  }
]

// contemporarys: object[] = [
//   {
//     name: "contemporary 1",
//     cost: "450",
//     pic: "https://th.bing.com/th/id/OIP.CethAvhs3gv4wS8ewFj2cQHaFA?pid=ImgDet&rs=1"
//   },
//   {
//     name: "contemporary 2",
//     cost: "500",
//     pic: "https://th.bing.com/th/id/R.d72c5385c4d7ab7220c6e9a4eb14e010?rik=GtsljzJsNuG5Nw&riu=http%3a%2f%2fcdn.home-designing.com%2fwp-content%2fuploads%2f2015%2f02%2fgorgeous-exterior.jpg&ehk=BEzPqCrFmYFWh2nRa0Wj6IhWM1irXACAHOUTPU4BbuE%3d&risl=&pid=ImgRaw&r=0"
//   },
//   {
//     name: "contemporary 3",
//     cost: "700",
//     pic: "https://th.bing.com/th/id/R.a61368d47e009808feb6c6adfa79eb9c?rik=IXif6z3knhFgNw&riu=http%3a%2f%2fmaricamckeel.com%2fwp-content%2fuploads%2f2017%2f11%2f09a_the-cresta-20.jpg&ehk=tQdHLDn8yRqg9PXbn9Ma2CzfcldfnHR3iJvyXTE4we8%3d&risl=&pid=ImgRaw&r=0"
//   }
// ]

showMansions() {
  this.isMansions = !this.isMansions

}

showContemporarys() {
  this.isMansions = false;
  this.isContemporarys = true;
}



constructor() { }

ngOnInit(): void {}
};
