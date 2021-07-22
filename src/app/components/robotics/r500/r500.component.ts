import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-r500',
  templateUrl: './r500.component.html',
  styleUrls: ['./r500.component.scss']
})
export class R500Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  abrir(ruta: string){
    open(ruta, '_blank');
  }
}
