import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kinderbot',
  templateUrl: './kinderbot.component.html',
  styleUrls: ['./kinderbot.component.scss']
})
export class KinderbotComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  abrir(ruta: string){
    open(ruta, '_blank');
  }
}
