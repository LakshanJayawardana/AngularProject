import { Component } from '@angular/core';
import { MoviesService } from '../core/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  items: any[] = [];
  constructor(private movieService : MoviesService ) { }
  ngOnInit(): void {
    this.moviesInTheaters = [];
    this.moviesFutureReleases = [
      {
        title :'Ice Men',
        releaseDate :Date(),
        price : 1999.99
      },
      
      {
        title :'Iron Man',
        releaseDate :Date(),
        price : 1999.99
      },
      
    ],
    this.movieService.getAllProducts().subscribe(response => {
      this.items = response;
    });
  }

  moviesInTheaters : any[] = [];
  moviesFutureReleases : any[] = [];
}
