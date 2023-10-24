import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { generoCreacionDTO } from '../genero';

@Component({
  selector: 'app-editar-genero',
  templateUrl: './editar-genero.component.html',
  styleUrls: ['./editar-genero.component.css']
})
export class EditarGeneroComponent {
  constructor(private activeRoute:ActivatedRoute, private router:Router){

  }
  modelo:generoCreacionDTO = { nombre:'Drama'}
  ngOnInit(): void {
    this.activeRoute.params.subscribe((params:any) =>{
      //alert(params.id)
    })
  }
  
  guardarCambios(genero:generoCreacionDTO){
    console.log(genero, "editar");
    this.router.navigate(['/generos'])
  }
}
