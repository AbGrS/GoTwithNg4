import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-first-ng-component',
  templateUrl: './my-first-ng-component.component.html',
  styleUrls: ['./my-first-ng-component.component.css']
})
export class MyFirstNgComponentComponent implements OnInit {
  somethingCool= "interesting";
  arr=[
  	{
  		id:"1",
  		name:"Cercie",
      icon:"keyboard_hide"
  	},{
  		id:"2",
  		name:"Jofferey",
      icon:"keyboard_hide"
  	},{
  		id:"3",
  		name:"tywin Lannister",
      icon:"keyboard_hide"
  	},{
  		id:"4",
  		name:"Thoros of Myr",
      icon:"keyboard_hide"
  	},{
  		id:"5",
  		name:"The Red Woman",
      icon:"keyboard_hide"
  	},{
  		id:"6",
  		name:"Meryn Trant"
  	}
  ];
  constructor() { }

  ngOnInit() {

  }

}
