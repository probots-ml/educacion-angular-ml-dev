import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  paginaActual: string;

  datosJumbotron ={
    titulo: 'Si ya posee su kit, siga los primeros pasos del asistente',
    subtitulo: 'Sepa qué hacer cuando tenga su kit en sus manos',
    detalle: 'Inicie el camino a su primera programación',
    textoDelBoton: 'Ir al asistente',
    link:'/first-steps'
  }

  constructor() { 
    this.paginaActual = "home";
  }

  ngOnInit(): void {
  }

}
