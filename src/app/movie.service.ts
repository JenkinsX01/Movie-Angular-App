import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { Observable } from '../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http:HttpClient) { }
  url="http://localhost:8083/";
  
  headers = new HttpHeaders({
    'Content-Type': 'application/json'});
  options = {headers:this.headers}

  getMovieCatalog(userId:number){
    return this.http.get<any>(this.url+"catalog/"+userId);
  }

  getMovieInfo(){
  return this.http.get<any>(this.url+"catalog/allmovies/");
  }

  addMovies(movie:Movie):Observable<Object>{  
    console.log(movie); 
    return this.http.post<any>(this.url+"addmovie/",movie);
}
  
}
export class Movie{

  movieId:Number;
  movieName:string;
  description:Number

  constructor(movieId,movieName,description){
      this.movieId=movieId;
      this.movieName=movieName;
      this.description=description

  }
}