import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filtro-pelicula',
  templateUrl: './filtro-pelicula.component.html',
  styleUrls: ['./filtro-pelicula.component.css']
})
export class FiltroPeliculaComponent implements OnInit {

  constructor(private activateRoute:ActivatedRoute, private formBuider : FormBuilder, private location:Location){

  }

  form: FormGroup;
  generos = [{id:1, nombre:"Drama"}, {id:2, nombre:"Acción"}, {id:3, nombre:"Comedia"}]
  
  peliculas = [
    {titulo: 'Spiderman: Far From Home', enCines:false, proximosEstrenos:true, generos:[1,2], poster:'https://cloudfront-eu-central-1.images.arcpublishing.com/diarioas/RCIIWCI4NVIBPFLS672R5QXFH4.jpg'},
    {titulo: 'Moana', enCines:true, proximosEstrenos:false, generos:[3], poster:'https://lumiere-a.akamaihd.net/v1/images/p_moana_20530_214883e3.jpeg'},
    {titulo: 'Inception', enCines:false, proximosEstrenos:false, generos:[1,3], poster:'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg'}
  ];

  peliculasOriginal = this.peliculas; 
  formularioOriginal = {
  titulo:'',
  generoId:0,
  proximosEstrenos:false,
  enCines:false
 }
  ngOnInit(): void {
   this.form = this.formBuider.group(this.formularioOriginal)
   this.leervaloresURL();
   this.buscarPeliculas(this.form.value); 
   
   this.form.valueChanges
   .subscribe((valores:any) => {
    this.peliculas = this.peliculasOriginal;
    this.buscarPeliculas(valores); 
    this.escribirParametrosBusquedaEnUrl();
   })
  }

  private leervaloresURL(){
    this.activateRoute.queryParams.subscribe((params:any)=>{
      var obj:any = {};
      if(params.titulo){
        obj.titulo = params.titulo
      }
      if(params.generoId != 0){
        obj.generoId = Number(params.generoId)
      }

      if(params.proximosEstrenos){
        obj.proximosEstrenos = params.proximosEstrenos
      }

      if(params.enCines){
        obj.enCines = params.enCines
      }

      this.form.patchValue(obj);
    })
    
  }
  private escribirParametrosBusquedaEnUrl(){
    var queryStrings = [];
    var valoresFormularios = this.form.value; 

    if(valoresFormularios.titulo){
      queryStrings.push(`titulo=${valoresFormularios.titulo}`)
    }

    
    if(valoresFormularios.generoId !=0 ){
      queryStrings.push(`generoId=${valoresFormularios.generoId}`)
    }

    
    if(valoresFormularios.proximosEstrenos){
      queryStrings.push(`proximosEstrenos=${valoresFormularios.proximosEstrenos}`)
    }
    
    if(valoresFormularios.enCines){
      queryStrings.push(`enCines=${valoresFormularios.enCines}`)
    }

    this.location.replaceState('peliculas/buscar', queryStrings.join('&'))
  }

  buscarPeliculas(valores:any){
    if(valores.titulo){
      this.peliculas = this.peliculas.filter(pelicula => pelicula.titulo.indexOf(valores.titulo) !== -1)
    }

    if(valores.generoId !== 0){
      this.peliculas = this.peliculas.filter(pelicula => pelicula.generos.indexOf(valores.generoId) !== -1)
    }

    if(valores.proximosEstrenos){
      this.peliculas = this.peliculas.filter(pelicula => pelicula.proximosEstrenos)
    }

    if(valores.enCines){
      this.peliculas = this.peliculas.filter(pelicula => pelicula.enCines)
    }
  }

  limpiar(){
    this.form.patchValue(this.formularioOriginal);
  }
}
