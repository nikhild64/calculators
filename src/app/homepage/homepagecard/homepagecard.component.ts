import { Component, Input, OnInit } from '@angular/core';
import { CalculaterData } from '../homepage/homepage.component';

@Component({
  selector: 'app-homepagecard',
  templateUrl: './homepagecard.component.html',
  styleUrls: ['./homepagecard.component.scss']
})
export class HomepagecardComponent implements OnInit {
@Input('cData') cData!:CalculaterData;
  constructor() { }

  ngOnInit(): void {
  }

}
