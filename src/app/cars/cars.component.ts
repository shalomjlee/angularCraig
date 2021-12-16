import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  isCars: boolean = false;
  isNotCars: boolean = true;
  custom: string="red"

  constructor() { }

  ngOnInit(): void {
  }

  showCars() {
    this.isCars = true;
  }

  hideCars() {
    this.isCars = false;
  }

  

}
