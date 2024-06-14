import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { MovieFilterComponent } from './components/movie-filter/movie-filter.component';

const routes: Routes = [
  
  {
    path:"movie-card",
    component:MovieListComponent
  },
  {
    path:"movie-list",
    component:MovieListComponent
  },
  {
    path:"movie-filter",
    component:MovieFilterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
