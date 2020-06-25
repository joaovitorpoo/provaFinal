import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaudeMentalPage } from './saude-mental.page';

const routes: Routes = [
  {
    path: '',
    component: SaudeMentalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaudeMentalPageRoutingModule {}
