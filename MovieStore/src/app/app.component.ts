import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
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
      {
        title :'Ice Age',
        releaseDate :Date(),
        price : 1999.99
      },
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
      {
        title :'Ice Age',
        releaseDate :Date(),
        price : 1999.99
      }
    ]
  }

  moviesInTheaters : any[] = [];
  moviesFutureReleases : any[] = [];
  title = 'Movie app';
}

