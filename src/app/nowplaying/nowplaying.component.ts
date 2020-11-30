import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../service/movies.service';
import { delay } from 'rxjs/internal/operators/delay';


@Component({
  selector: 'app-nowplaying',
  templateUrl: './nowplaying.component.html',
  styleUrls: ['./nowplaying.component.scss']
})
export class NowplayingComponent implements OnInit {
  nowPlaying: any;
  loader = true;

  constructor(private movies: MoviesService) { }

  ngOnInit(): void {
    this.trendingMovies(1);
  }

  // tslint:disable-next-line: typedef
  trendingMovies(page: number) {
    this.movies.getNowPlaying(page).pipe(delay(2000)).subscribe((res: any) => {
      this.nowPlaying = res.results;
      this.loader = false;
    });
  }
}
