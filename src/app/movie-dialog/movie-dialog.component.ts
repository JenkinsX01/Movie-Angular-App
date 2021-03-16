import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormControl,FormGroup } from '@angular/forms';
import { MovieService } from '../movie.service';
@Component({
  selector: 'app-movie-dialog',
  templateUrl: './movie-dialog.component.html',
  styleUrls: ['./movie-dialog.component.css']
})
export class MovieDialogComponent {
  enableBool:boolean;
  movie:Movie;
  movieForm=new FormGroup({
    moviename:new FormControl(''),
    description:new FormControl('')})
  panelOpenState = false;
  starRating = 0; 
  constructor(public dialogRef: MatDialogRef<MovieDialogComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any,
    private movieService:MovieService
    ) { }
 
    onCancel(): void { 
      this.dialogRef.close(); 
    } 
    saveMovie(){
      console.log(this.movieForm.value.moviename);
      this.movie=new Movie(0,this.movieForm.value.moviename,this.movieForm.value.description);
      console.log(this.movie);
      console.log(this.starRating);
      this.movieService.addMovies(this.movie).subscribe(data=>{
        console.log(data);
      });
    }

    enable(){
      if(this.movieForm.value.moviename.trim()!='' && this.movieForm.value.description.trim()!=''){
        this.enableBool= true;
        return this.enableBool;
      }
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