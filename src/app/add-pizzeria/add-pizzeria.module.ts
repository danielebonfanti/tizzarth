import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddPizzeriaPageRoutingModule } from './add-pizzeria-routing.module';

import { AddPizzeriaPage } from './add-pizzeria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddPizzeriaPageRoutingModule
  ],
  declarations: [AddPizzeriaPage]
})
export class AddPizzeriaPageModule {}
