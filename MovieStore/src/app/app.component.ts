import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "MovieWeb";

  movies = [{
    title :'Spider Man',
    releaseDate :Date(),
    price : 1999.99
  },
  {
    title :'3 Idiots',
    releaseDate :Date(),
    price : 1999.99
  },
  {
    title :'Moana',
    releaseDate :Date(),
    price : 1999.99
  }
];


  duplicateNumber(n: number){
    return n*2;
  }
}
