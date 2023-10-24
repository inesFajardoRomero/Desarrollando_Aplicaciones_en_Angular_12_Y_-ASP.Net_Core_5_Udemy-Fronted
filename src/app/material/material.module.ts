import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatNativeDateModule } from "@angular/material/core";

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule, 
    MatDatepickerModule,
    MatButtonModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatSelectModule,
    MatNativeDateModule
  ],
})
export class MaterialModule { }
