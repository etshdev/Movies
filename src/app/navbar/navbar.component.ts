import { Component, OnInit } from '@angular/core';
import {AuthService  } from "../auth.service";
import { data } from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {

  islogin:boolean=false;
  dataName:any;

  constructor(public _AuthService:AuthService) { 

    _AuthService.userData.subscribe((data)=>
    {
      if(data)
      {
        this.islogin=true;
        this.dataName= data.first_name
      }
      else
      {
        this.islogin=false;
      }
      
    })
    

 
  }


  logout()
  {
    this.islogin=false;
   
  
  }
  

  ngOnInit(): void {
  }

}
