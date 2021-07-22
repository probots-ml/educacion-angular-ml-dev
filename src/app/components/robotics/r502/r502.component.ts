import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-r502',
  templateUrl: './r502.component.html',
  styleUrls: ['./r502.component.scss']
})
export class R502Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  abrir(ruta: string){
    open(ruta, '_blank');
  }
}
