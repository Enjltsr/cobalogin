import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-catatan-edit',
  templateUrl: './catatan-edit.page.html',
  styleUrls: ['./catatan-edit.page.scss'],
})
export class CatatanEditPage implements OnInit {

  id: any;
  judul: any;
  isi: any;
  constructor(private route: ActivatedRoute, private router: Router, public _apiService: ApiService,
  ) {
  this.route.params.subscribe((param: any) => {
  this.id = param.id;
  console.log(this.id);
  this.ambilCatatan(this.id);
  })
  }
  ngOnInit() {
  }
  ambilCatatan(id: any) {
  this._apiService.lihat(id, '/lihatCatatan.php?id=').subscribe({
  next: (hasil: any) => {
  console.log('sukses', hasil);
  let catatan = hasil;
  this.judul = catatan.judul;
  this.isi = catatan.isi;
  },
  error: (error: any) => {
  this._apiService.notif('gagal ambil data');
  }
  })
  }
  editCatatan() {
  let data = {
  id: this.id,
  judul: this.judul,
  isi: this.isi,
  }
  this._apiService.edit(data, '/editCatatan.php')
  .subscribe({
  next: (hasil: any) => {
  console.log(hasil);
  this.id = '';
  this.judul = '';
  this.isi = '';
  this._apiService.notif('berhasil edit Catatan');
  this.router.navigateByUrl('/catatan');
  },
  error: (err: any) => {
  this._apiService.notif('gagal edit Catatan');
  }
  })
  }
 }