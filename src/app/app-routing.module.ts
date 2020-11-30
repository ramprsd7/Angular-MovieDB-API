import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';
import { NowplayingComponent } from './nowplaying/nowplaying.component';
import { Page404Component } from './page404/page404.component';

const routes: Routes = [
  { path: '' , component: HomeComponent },
  { path: 'movie' , component: MovieComponent },
  { path: 'now' , component: NowplayingComponent },
  { path: '**' , component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
