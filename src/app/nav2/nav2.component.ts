import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-nav2',
  templateUrl: './nav2.component.html',
  styleUrls: ['./nav2.component.scss']
})
export class Nav2Component implements OnInit {
  navbarOpen1 = false;
  navbarOpen2 = false;
  constructor(private eleRef: ElementRef) { }

  ngOnInit() {
  }
  onToggle1(){
    this.navbarOpen1 = !this.navbarOpen1;
  }
  onToggle2(){
    this.navbarOpen2 = !this.navbarOpen2;
  }
}
