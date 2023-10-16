import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    setTimeout(() => {
      this.peliculasEnCines = [
        {
          titulo: 'Spider-Man',
          fechaLanzamiento: new Date(),
          precio: 1400.99,
        },
        {
          titulo: 'Moana',
          fechaLanzamiento: new Date('2016-11-14'),
          precio: 300.99,
        },
      ];
      this.peliculasProximosEstrenos = [];
    }, 3000);
  }
  title = 'al valor que yo quiera';
  peliculasEnCines;
  peliculasProximosEstrenos;

  duplicarNumero(valor: number) {
    return valor * 2;
  }
}
