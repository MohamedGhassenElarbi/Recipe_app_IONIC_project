import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MesRecettesPageRoutingModule } from './mes-recettes-routing.module';

import { MesRecettesPage } from './mes-recettes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MesRecettesPageRoutingModule
  ],
  declarations: [MesRecettesPage]
})
export class MesRecettesPageModule {}
