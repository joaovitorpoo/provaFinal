import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaudeMentalPageRoutingModule } from './saude-mental-routing.module';

import { SaudeMentalPage } from './saude-mental.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaudeMentalPageRoutingModule
  ],
  declarations: [SaudeMentalPage]
})
export class SaudeMentalPageModule {}
