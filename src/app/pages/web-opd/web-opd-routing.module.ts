import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebOpdPage } from './web-opd.page';

const routes: Routes = [
  {
    path: '',
    component: WebOpdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebOpdPageRoutingModule {}
