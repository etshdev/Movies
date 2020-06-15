import { Injectable } from '@angular/core';
import{HttpClient}from'@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public _HttpClient:HttpClient ){

     
  }
  getTrendingMovies():Observable<any>
    {
      return this._HttpClient.get('https://api.themoviedb.org/3/trending/movie/day?api_key=d5673102e6aa1a5806c11e51b6d61acf');
    }

  getMoviesDetails(id):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=d5673102e6aa1a5806c11e51b6d61acf&language=en-US`);
  }



    
}
