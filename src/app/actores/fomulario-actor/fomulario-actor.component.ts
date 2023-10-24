import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { actorCreacionDTO } from '../actor';

@Component({
  selector: 'app-fomulario-actor',
  templateUrl: './fomulario-actor.component.html',
  styleUrls: ['./fomulario-actor.component.css']
})
export class FomularioActorComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) {
  }

  @Output() submit: EventEmitter<actorCreacionDTO> = new EventEmitter<actorCreacionDTO>
  @Input() modelo: actorCreacionDTO; 


  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: ['', { validators: [Validators.required] }],
      fechaNacimiento: '',
      foto:''
    });

    if(this.modelo !== undefined){
      this.form.patchValue(this.modelo); 
    }
  }
  form: FormGroup;

  guardarCambios(){
    this.submit.emit(this.form.value); 
  }

  archivoSeleccionado(file){
    this.form.get('foto').setValue(file);
  }
}
