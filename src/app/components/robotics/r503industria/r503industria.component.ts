import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-r503industria',
  templateUrl: './r503industria.component.html',
  styleUrls: ['./r503industria.component.scss']
})
export class R503industriaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  abrir(ruta: string){
    open(ruta, '_blank');
  }
}
