import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../components/card/card.component';
import { NgOptimizedImage } from '@angular/common'



@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    CommonModule,
    NgOptimizedImage
  ],
  exports: [
    CommonModule,
    CardComponent,
    NgOptimizedImage
  ]
})
export class SharedModule { }
