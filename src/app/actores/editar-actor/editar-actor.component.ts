import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-actor',
  templateUrl: './editar-actor.component.html',
  styleUrls: ['./editar-actor.component.css']
})
export class EditarActorComponent implements OnInit {

  constructor(private activeRoute:ActivatedRoute){

  }
  ngOnInit(): void {
    this.activeRoute.params.subscribe((params:any) =>{
      //alert(params.id)
    })
  }
}
