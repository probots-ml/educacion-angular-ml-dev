import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-r503',
  templateUrl: './r503.component.html',
  styleUrls: ['./r503.component.scss']
})
export class R503Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  abrir(ruta: string){
    open(ruta, '_blank');
  }
}
