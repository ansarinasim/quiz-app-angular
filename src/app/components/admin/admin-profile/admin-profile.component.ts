import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {

  showTab = 1;
  tabToggle(index: number){
    this.showTab =index;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
