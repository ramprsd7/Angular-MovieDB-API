import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../service/movies.service';
import { delay } from 'rxjs/internal/operators/delay';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  topRated: any;
  responsiveOptions;
  loader = true;
  totalResults: any;

  searchRes: any;
  searchStr: string;
  constructor(private movieService: MoviesService) {
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
  ];
  }

  name = 'parammovies';

  ngOnInit(): void {
    this.getTopRatedMovies(1);
  }


  // tslint:disable-next-line: typedef
  getTopRatedMovies(page: number) {
    this.movieService.getTopRatedMovies(page).pipe(delay(1000)).subscribe((res: any) => {
      this.topRated = res.results;
      this.totalResults = res.total_results;
      this.loader = false;
    },
    error => console.log(error));
  }


  // tslint:disable-next-line: typedef
  searchMovies() {
    this.movieService.searchMovies(this.searchStr).subscribe(res => {
      this.searchRes = res.results;
    });
  }

}
