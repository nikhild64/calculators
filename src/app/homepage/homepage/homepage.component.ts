import { Component, OnInit } from '@angular/core';
export interface CalculaterData{
  name:string,
  description:string,
  stockImage:string,
  routerLink:string
}
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  items:CalculaterData[]=[
    {name:'Simple Interest',
  description:'Helps you to calculate Simple Interest',
  stockImage:'../../../assets/dummy.jpg',
  routerLink:'simple-interest'
  },{name:'Simple Interest',
  description:'Helps you to calculate Simple Interest',
  stockImage:'../../../assets/dummy.jpg',
  routerLink:'simple-interest'
  },{name:'Simple Interest',
  description:'Helps you to calculate Simple Interest',
  stockImage:'../../../assets/dummy.jpg',
  routerLink:'simple-interest'
  },{name:'Simple Interest',
  description:'Helps you to calculate Simple Interest',
  stockImage:'../../../assets/dummy.jpg',
  routerLink:'simple-interest'
  },{name:'Simple Interest',
  description:'Helps you to calculate Simple Interest',
  stockImage:'../../../assets/dummy.jpg',
  routerLink:'simple-interest'
  },{name:'Simple Interest',
  description:'Helps you to calculate Simple Interest',
  stockImage:'../../../assets/dummy.jpg',
  routerLink:'simple-interest'
  },{name:'Simple Interest',
  description:'Helps you to calculate Simple Interest',
  stockImage:'../../../assets/dummy.jpg',
  routerLink:'simple-interest'
  }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
