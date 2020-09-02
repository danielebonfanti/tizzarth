import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddPizzeriaPage } from './add-pizzeria.page';

const routes: Routes = [
  {
    path: '',
    component: AddPizzeriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddPizzeriaPageRoutingModule {}
