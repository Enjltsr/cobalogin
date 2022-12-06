import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatatanTambahPage } from './catatan-tambah.page';

const routes: Routes = [
  {
    path: '',
    component: CatatanTambahPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatatanTambahPageRoutingModule {}
