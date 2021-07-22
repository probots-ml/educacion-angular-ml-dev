import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit {
  paginaActual: string;

  tipoDeCliente = ''
  constructor() { 
    this.paginaActual = "training";
  }

  ngOnInit(): void {
  }

}
