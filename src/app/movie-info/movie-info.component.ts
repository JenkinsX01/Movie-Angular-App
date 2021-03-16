import { Component, OnInit,Inject } from '@angular/core';
import { MovieService } from '../movie.service';
import { FormControl,FormGroup } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MovieDialogComponent } from '../movie-dialog/movie-dialog.component';

export interface DialogData {
  moviename: string;
  description: string;
}

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit {

  userId:number;
  response:any;
  movies:any;

  constructor(private movieService: MovieService,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.movieService.getMovieCatalog(1).subscribe(data=>{
      this.response=data;
      console.log(this.response);
    })

    this.movieService.getMovieInfo().subscribe(data=>{
      this.movies=data;
      console.log(data);
    })
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(MovieDialogComponent, {
      width: '300px',
    });
    dialogRef.afterClosed().subscribe(result => { 
     
    }); 

  }

  

}
