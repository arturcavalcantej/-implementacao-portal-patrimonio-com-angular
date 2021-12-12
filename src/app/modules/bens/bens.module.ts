import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BensRoutingModule } from './bens-routing.module';
import { IndexComponent } from './components/index/index.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    IndexComponent,
    
  ],
  imports: [
    CommonModule,
    BensRoutingModule,
    ReactiveFormsModule
  ]
})
export class BensModule { }
