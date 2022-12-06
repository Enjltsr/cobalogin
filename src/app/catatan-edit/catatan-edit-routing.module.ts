import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatatanEditPage } from './catatan-edit.page';

const routes: Routes = [
  {
    path: '',
    component: CatatanEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatatanEditPageRoutingModule {}
