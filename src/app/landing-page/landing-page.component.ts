import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  ngOnInit(): void {

      this.peliculasEnCines = [
        {
          titulo: 'Spider-Man',
          fechaLanzamiento: new Date(),
          precio: 1400.99,
          poster:'https://cloudfront-eu-central-1.images.arcpublishing.com/diarioas/RCIIWCI4NVIBPFLS672R5QXFH4.jpg'
        },
        {
          titulo: 'Moana',
          fechaLanzamiento: new Date('2016-11-14'),
          precio: 300.99,
          poster:'https://lumiere-a.akamaihd.net/v1/images/p_moana_20530_214883e3.jpeg'
        },
      ];
      this.peliculasProximosEstrenos = [];

  }
  peliculasEnCines;
  peliculasProximosEstrenos;
}
