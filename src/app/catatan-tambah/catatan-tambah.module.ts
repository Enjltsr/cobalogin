import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CatatanTambahPageRoutingModule } from './catatan-tambah-routing.module';

import { CatatanTambahPage } from './catatan-tambah.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CatatanTambahPageRoutingModule
  ],
  declarations: [CatatanTambahPage]
})
export class CatatanTambahPageModule {}
