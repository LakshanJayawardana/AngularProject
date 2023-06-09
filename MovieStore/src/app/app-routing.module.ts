import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IndexGenresComponent } from './genres/index-genres/index-genres.component';
import { CreateGenreComponent } from './genres/create-genre/create-genre.component';
import { IndexActorsComponent } from './actors/index-actors/index-actors.component';
import { CreateActorComponent } from './actors/create-actor/create-actor.component';
import { IndexMovieTheaterComponent } from './movie-theaters/index-movie-theater/index-movie-theater.component';
import { CreateMovieTheaterComponent } from './movie-theaters/create-movie-theater/create-movie-theater.component';
import { CreateMovieComponent } from './movies/create-movie/create-movie.component';
import { EditActorsComponent } from './actors/edit-actors/edit-actors.component';
import { EditGenreComponent } from './genres/edit-genre/edit-genre.component';
import { EditMovieTheatersComponent } from './movie-theaters/edit-movie-theaters/edit-movie-theaters.component';

const routes: Routes = [
  {path : '', component:HomeComponent},

  {path : 'genres', component:IndexGenresComponent},
  {path : 'genres/create', component:CreateGenreComponent},
  {path : 'genres/edit/:id', component:EditGenreComponent},

  {path : 'actors', component:IndexActorsComponent},
  {path : 'actors/create', component:CreateActorComponent},
  {path : 'actors/edit/:id', component:EditActorsComponent},

  {path : 'movietheaters', component:IndexMovieTheaterComponent},
  {path : 'movietheaters/create', component:CreateMovieTheaterComponent},
  {path : 'movietheaters/edit/:id', component:EditMovieTheatersComponent},

  {path : 'movies/create', component:CreateMovieComponent},
  {path : 'movies/edit/:id', component:EditMovieTheatersComponent},
  {path : '**', redirectTo: ''}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
