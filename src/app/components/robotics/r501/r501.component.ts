import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-r501',
  templateUrl: './r501.component.html',
  styleUrls: ['./r501.component.scss']
})
export class R501Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  abrir(ruta: string){
    open(ruta, '_blank');
  }
}
