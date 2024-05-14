import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WebOpdPageRoutingModule } from './web-opd-routing.module';

import { WebOpdPage } from './web-opd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WebOpdPageRoutingModule
  ],
  declarations: [WebOpdPage]
})
export class WebOpdPageModule {}
