import { Component, Input, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Input()
  paginaActual: string;

  constructor() {
   }

  ngOnInit(): void {

  }

  abrirEnlace(direccion: string){
    open(direccion, "_self")
  }

 
}
