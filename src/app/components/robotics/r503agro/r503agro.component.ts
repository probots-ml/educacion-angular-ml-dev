import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-r503agro',
  templateUrl: './r503agro.component.html',
  styleUrls: ['./r503agro.component.scss']
})
export class R503agroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  abrir(ruta: string){
    open(ruta, '_blank');
  }
}
