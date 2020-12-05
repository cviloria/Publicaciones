import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.scss']
})
export class PublicacionesComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private _document,) { }

  ngOnInit() {
    this._document.body.classList.remove('login-background');
  }

}
