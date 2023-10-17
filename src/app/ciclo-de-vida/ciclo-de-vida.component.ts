import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { RatingComponent } from '../utilidades/rating/rating.component';

@Component({
  selector: 'app-ciclo-de-vida',
  templateUrl: './ciclo-de-vida.component.html',
  styleUrls: ['./ciclo-de-vida.component.css']
})
export class CicloDeVidaComponent implements OnInit, OnChanges, OnDestroy, DoCheck, AfterViewInit{
  @Input() titulo:string; 
  @ViewChild(RatingComponent) ratingComponent : RatingComponent;
  
  constructor(private changeDetectorRef:ChangeDetectorRef){

  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
    this.ratingComponent.ratingSeleccionado = 3;
    this.changeDetectorRef.detectChanges()
    
  }
  ngDoCheck(): void {
    console.log("ngDoCheck");
  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy");
  }
 
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes, "ngOnChanges");
  }
  
  ngOnInit(): void {
    console.log("ngOnInit");
    
  }

}
