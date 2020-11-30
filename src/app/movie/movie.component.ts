import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/service/movies.service';
import { delay } from 'rxjs/internal/operators/delay';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  loader = true;
  Upcome: any;

  constructor(private movies: MoviesService) { }

  // tslint:disable-next-line: typedef
  ngOnInit(){
    this.getUpcomingMovies(1);
  }

  // tslint:disable-next-line: typedef
  getUpcomingMovies(page: number){
    this.movies.getUpComingMovies(page).pipe(delay(1000)).subscribe((res: any) => {
      this.Upcome = res.results;
      this.loader = false;
    },
    error => console.log(error));
  }

}
