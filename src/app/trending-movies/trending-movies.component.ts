import { Component, OnInit } from '@angular/core';
import{DataService}from'../data.service';
import * as $ from 'jquery';


@Component({
  selector: 'app-trending-movies',
  templateUrl: './trending-movies.component.html',
  styleUrls: ['./trending-movies.component.scss']
})
export class TrendingMoviesComponent implements OnInit {
  TrendingMovies=[];
  prefiximg="https://image.tmdb.org/t/p/w500/";
  constructor(public _DataService:DataService) { 

    this._DataService.getTrendingMovies().subscribe((data) =>{
      
      this.TrendingMovies=data.results;

    }),(err)=>{console.log(err)}
  }

  ngOnInit(): void {

  }



}
