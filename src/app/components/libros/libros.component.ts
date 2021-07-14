import { Component, OnInit } from '@angular/core';
import {Producto, ListaLibro} from '../../interfaces/producto';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.scss']
})
export class LibrosComponent implements OnInit {

  ListaL=ListaLibro;

  constructor() { }

  ngOnInit(): void {
  }

}
