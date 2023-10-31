import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { actorCreacionDTO, actorDTO } from '../actor';

@Component({
  selector: 'app-fomulario-actor',
  templateUrl: './fomulario-actor.component.html',
  styleUrls: ['./fomulario-actor.component.css']
})
export class FomularioActorComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) {
  }

  @Output() OnSubmit: EventEmitter<actorCreacionDTO> = new EventEmitter<actorCreacionDTO>
  @Input() modelo: actorDTO; 


  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: ['', { validators: [Validators.required] }],
      fechaNacimiento: '',
      foto:'', 
      biografia:''
    });

    if(this.modelo !== undefined){
      this.form.patchValue(this.modelo); 
    }
  }
  form: FormGroup;

  guardarCambios(){
    console.log("onsubmit")
    this.OnSubmit.emit(this.form.value); 
  }

  archivoSeleccionado(file){
    this.form.get('foto').setValue(file);
  }

  cambioMarkDown(texto:string){
      this.form.get('biografia').setValue(texto)
  }
}
