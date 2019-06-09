import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CinemasPageRoutingModule } from './cinemas.router.module';

import { CinemasPage } from './cinemas.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    CinemasPageRoutingModule
  ],
  declarations: [CinemasPage]
})
export class CinemasPageModule {}
