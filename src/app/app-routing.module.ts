import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AutoLoginGuard } from './guards/auto-login.guard';
import { AuthGuard } from './guards/auth.guard';
const routes: Routes = [
 {
 path: 'catatan',
 loadChildren: () => import('./catatan/catatan.module').then(m => m.CatatanPageModule),
 canLoad: [AuthGuard] // Secure all child pages
 },
 {
 path: '',
 redirectTo: 'login',
 pathMatch: 'full'
 },
 {
 path: 'login',
 loadChildren: () => import('./login/login.module').then(m =>
 m.LoginPageModule),
 canLoad: [AutoLoginGuard]
 },
  {
    path: 'catatan-tambah',
    loadChildren: () => import('./catatan-tambah/catatan-tambah.module').then( m => m.CatatanTambahPageModule)
  },
  {
    path: 'catatan-edit/:id',
    loadChildren: () => import('./catatan-edit/catatan-edit.module').then( m => m.CatatanEditPageModule)
  },
];
@NgModule({
 imports: [
 RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
 ],
 exports: [RouterModule]
})
export class AppRoutingModule { }