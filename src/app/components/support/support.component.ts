import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent implements OnInit {
  paginaActual: string;

  constructor() { }

  ngOnInit(): void {
    this.paginaActual = "support";
  }

  abrirRedSocial(url: string){
    open(url)
  }
}
