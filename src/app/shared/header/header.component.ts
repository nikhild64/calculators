import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  togglePopularLink(){
    document.getElementById('popular-dropdown')?.classList.toggle('show');
  }

  toggleClass(){
    console.log('navbarScroll');
    document.getElementById('navbarScroll')?.classList.toggle('show');

  }

}
