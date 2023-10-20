import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-genero',
  templateUrl: './editar-genero.component.html',
  styleUrls: ['./editar-genero.component.css']
})
export class EditarGeneroComponent {
  constructor(private activeRoute:ActivatedRoute){

  }
  ngOnInit(): void {
    this.activeRoute.params.subscribe((params:any) =>{
      //alert(params.id)
    })
  }
}
