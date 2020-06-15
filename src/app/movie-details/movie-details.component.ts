import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {DataService } from "../data.service";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  prefiximg="https://image.tmdb.org/t/p/w500/";
  isLoading:boolean=false;
  MovieDetails:any;
  id:any;
  genere:any;
  constructor(public _ActivatedRoute:ActivatedRoute,public _DataService:DataService) { 

    this.id=this._ActivatedRoute.snapshot.paramMap.get('id')
    this._DataService.getMoviesDetails(this.id).subscribe((data)=>{
      this.MovieDetails=data;
      this.isLoading=true;

    } , (err)=>{console.log(err)})

  }

  ngOnInit(): void {
  }

}
