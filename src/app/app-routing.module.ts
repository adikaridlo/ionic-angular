import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'beranda',
    pathMatch: 'full'
  },
  {
    path: 'movies',
    loadChildren: () => import('./pages/movies/movies.module').then( m => m.MoviesPageModule)
  },
  {
    path: 'movies/:id',
    loadChildren: () => import('./pages/movies-details/movies-details.module').then( m => m.MoviesDetailsPageModule)
  },
  {
    path: 'beranda',
    loadChildren: () => import('./pages/beranda/beranda.module').then( m => m.BerandaPageModule)
  },
  {
    path: 'images/img',
    loadChildren: () => import('./images/images.module').then( m => m.ImagesPageModule)
  },
  {
    path: 'opd',
    loadChildren: () => import('./pages/web-opd/web-opd.module').then( m => m.WebOpdPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
