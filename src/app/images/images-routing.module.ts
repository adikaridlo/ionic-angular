import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImagesPage } from './images.page';

const routes: Routes = [
  {
    path: 'img/popcorn.png',
    component: ImagesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImagesPageRoutingModule {}
