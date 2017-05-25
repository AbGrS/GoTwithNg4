import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-menu-bar',
  templateUrl: './left-menu-bar.component.html',
  styleUrls: ['./left-menu-bar.component.css']
})
export class LeftMenuBarComponent implements OnInit {

  constructor() { }
   arr=[
    {
      id:"1",
      name:"Cercie",
      icon:"keyboard_hide",
      secondaryIcon:"keyboard_arrow_right",
      showChildren:false,
      children:[{id:11,name:"cercie1", routerLink:"cercie"}, {id:12, name:"tomman"}],
      liClicked:"some",
      routerLink:null

    },{
      id:"2",
      name:"Jofferey",
      icon:"keyboard_tab",
      liClicked:"some",
      showChildren:false,
      children:"",
       secondaryIcon:"",
       routerLink:"cercie"
    },{
      id:"3",
      name:"tywin Lannister",
      icon:"phonelink",
      secondaryIcon:"keyboard_arrow_right",
      showChildren:false,
      children:[{id:11,name:"tyrion", routerLink:"tyrion"}, {id:12, name:"jammie", routerLink:"jofferey"}],
      liClicked:"some",
      routerLink:"cercie"
    },{
      id:"4",
      name:"Thoros of Myr",
      icon:"laptop",
      liClicked:"some",
      showChildren:false,
       children:"",
      secondaryIcon:"",
      routerLink:"cercie"
    },{
      id:"5",
      name:"The Red Woman",
      icon:"keyboard_hide",
      secondaryIcon:"keyboard_arrow_right",
      showChildren:false,
      children:[{id:11,name:"stannis", routerLink:"jofferey"}, {id:12, name:"arya"}],
      liClicked:"some",
      routerLink:"cercie"
    },{
      id:"6",
      name:"Meryn Trant",
      icon:"phonelink_off",
      liClicked:"some",
      showChildren:false,
       children:"",
      secondaryIcon:"",
      routerLink:"cercie"
    }
  ];

  testrouter="/member";

  clicked(event){
    var targetId;
    // if(event.target.id===""){
    //   targetId= event.target.parentNode.id;
    //   if(targetId===""){
    //     targetId=event.target.parentNode.parentNode.id;
    //   }
    // }
    // else{
    //   targetId= event.target.id;
    // }
     targetId= event.target.id;

     if(targetId!=""){
        for(var x in this.arr){
        if(this.arr[x].id===targetId){
          this.toggleSecondaryIcon(this.arr[x], event.target.classList)
        }
      }
     }
   
  }
  toggleSecondaryIcon(arr, classList){
    debugger;
      this.removeClickedClassFromSiblings();
      this.removeAllExpandedChildren(arr);
      if(arr.secondaryIcon){
        if(arr.secondaryIcon==="keyboard_arrow_right"){
        arr.secondaryIcon="keyboard_arrow_down";
        arr.showChildren= true
      }else{
        // arr.secondaryIcon="keyboard_arrow_right";
       //  arr.showChildren= false
      }
    }else{
      if(!classList.contains("liClicked")){
       this.removeClickedClassFromSiblings()
        arr.liClicked="liClicked"
      }
    }
    
  }
  removeClickedClassFromSiblings(){
    for(var z in this.arr){
              if(this.arr[z].liClicked=="liClicked"){
                this.arr[z].liClicked="";
              }
     }
  }
  removeAllExpandedChildren(arr){
    for(var z in this.arr){
              if(this.arr[z].showChildren==true && this.arr[z].id!=arr.id){
                this.arr[z].showChildren=false;
              }
        if(this.arr[z].secondaryIcon && this.arr[z].id!=arr.id){
          this.arr[z].secondaryIcon="keyboard_arrow_right"
        }
        
     }
  }
  ngOnInit() {
  }

}
