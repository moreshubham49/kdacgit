import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit
{

  vehicles;;

  constructor(public router: Router, public service:DataService) 
  {

  }

  ngOnInit() 
  {
    let StateOfResult = this.service.GetData();
    StateOfResult.subscribe((result)=>{
        this.vehicles = result;
    });
  }


}

