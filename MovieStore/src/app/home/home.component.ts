import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
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
      
    ]
  }

  moviesInTheaters : any[] = [];
  moviesFutureReleases : any[] = [];
}
