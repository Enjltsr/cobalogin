import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-catatan-tambah',
  templateUrl: './catatan-tambah.page.html',
  styleUrls: ['./catatan-tambah.page.scss'],
})
export class CatatanTambahPage{

  id: any;
  judul: any;
  isi: any;
  constructor(private router: Router, public _apiService: ApiService,) { }
  ngOnInit() {
  }
  addCatatan() {
  let data = {
  judul: this.judul,
  isi: this.isi,
  }
  this._apiService.tambah(data, '/tambahCatatan.php')
  .subscribe({
  next: (hasil: any) => {
  console.log(hasil);
  this.id = '';
  this.judul = '';
  this.isi = '';
  this._apiService.notif('berhasil input Catatan');
  this.router.navigateByUrl('/catatan');
  },
  error: (err: any) => {
  this._apiService.notif('gagal input Catatan');
  }
  })
  }
 }
 