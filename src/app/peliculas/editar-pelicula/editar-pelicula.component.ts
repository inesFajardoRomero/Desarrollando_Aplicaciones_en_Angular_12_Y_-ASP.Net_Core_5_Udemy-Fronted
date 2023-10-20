import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-pelicula',
  templateUrl: './editar-pelicula.component.html',
  styleUrls: ['./editar-pelicula.component.css']
})
export class EditarPeliculaComponent {
  constructor(private activeRoute:ActivatedRoute){

  }
  ngOnInit(): void {
    this.activeRoute.params.subscribe((params:any) =>{
      //alert(params.id)
    })
  }
}
