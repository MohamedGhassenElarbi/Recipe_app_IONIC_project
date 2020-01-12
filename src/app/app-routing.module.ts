import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full' },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'recette',
    loadChildren: () => import('./recette/recette.module').then( m => m.RecettePageModule)
  },
  {
    path: 'idea/:id',
    loadChildren: () => import('./recette/recette.module').then( m => m.RecettePageModule)
  },
  {
    path: 'mes-recettes',
    loadChildren: () => import('./mes-recettes/mes-recettes.module').then( m => m.MesRecettesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
