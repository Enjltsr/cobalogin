 import { Component } from '@angular/core';
 @Component({
 selector: 'app-root',
 templateUrl: 'app.component.html',
 styleUrls: ['app.component.scss'],
 })
 export class AppComponent {
 public appPages = [
 { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
 { title: 'Matakuliah', url: '/matakuliah', icon: 'cube' },
 ];
 public labels = [''];
 constructor() { }
 }