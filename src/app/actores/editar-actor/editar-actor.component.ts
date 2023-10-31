import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { actorCreacionDTO, actorDTO } from '../actor';

@Component({
  selector: 'app-editar-actor',
  templateUrl: './editar-actor.component.html',
  styleUrls: ['./editar-actor.component.css']
})
export class EditarActorComponent implements OnInit {

  constructor(private activeRoute:ActivatedRoute){

  }
  modelo:actorDTO = { nombre:'Felipe', fechaNacimiento:new Date(), foto:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Tom_Holland_Bali_2019_1_%28cropped%29.jpg/180px-Tom_Holland_Bali_2019_1_%28cropped%29.jpg", biografia:""}
  
  ngOnInit(): void {
    this.activeRoute.params.subscribe((params:any) =>{
      //alert(params.id)
    })
  }

  guardarCambios(actor:actorCreacionDTO){
    console.log(actor);
    //this.router.navigate(['/generos'])
  }
}
