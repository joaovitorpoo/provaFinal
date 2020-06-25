import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'saude-mental',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'saude-mental',
    loadChildren: () => import('./saude-mental/saude-mental.module').then( m => m.SaudeMentalPageModule)
  },
  {
    path: 'meus-dados',
    loadChildren: () => import('./meus-dados/meus-dados.module').then( m => m.MeusDadosPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
