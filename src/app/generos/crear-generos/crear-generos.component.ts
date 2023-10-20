import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-generos',
  templateUrl: './crear-generos.component.html',
  styleUrls: ['./crear-generos.component.css']
})
export class CrearGenerosComponent implements OnInit {
  constructor(private router:Router){

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  guardarCambios(){
    this.router.navigate(["/generos"]);
  }
}
