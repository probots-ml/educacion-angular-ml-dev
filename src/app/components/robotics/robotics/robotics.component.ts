import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
declare var jQuery: any;

@Component({
  selector: 'app-robotics',
  templateUrl: './robotics.component.html',
  styleUrls: ['./robotics.component.scss']
})
export class RoboticsComponent implements OnInit {

  productos: Array<Producto>;
  @ViewChild('detallesModal') detallesModal: ElementRef;
  productoModal: Producto;
  paginaActual: string;

  imagenes = {
    kinderbot: '../../../../assets/images-robotics/kinderbot/kinderbot-001.jpg'
    ,r500: '../../../../assets/images-robotics/r500/r500-002..png'
    ,r501: '../../../../assets/images-robotics/r501/r501-001.jpg'
    ,r502: '../../../../assets/images-robotics/r502/r502-001.jpg'
    ,r503: '../../../../assets/images-robotics/r503/r503-001.jpg'
    ,r503a: '../../../../assets/images-robotics/r503-agro/r503-agro-001.jpeg'
    ,r503i: '../../../../assets/images-robotics/r503-industria/r503-industria-001.jpeg'
    ,r503me: '../../../../assets/images-robotics/r503-metalbot/r503-metalbot-001.jpg'
    ,r503mi: '../../../../assets/images-robotics/r503-microbit/r503-microbit-001.jpg'
    ,r504: '../../../../assets/images-robotics/r504/r504-002.png'
  };

  descripciones = {
    kinderbot: 'El Kinderbot es el kit de Mis Ladrillos PROBOTS ideado para los inicios de la robótica, es perfecto para chicos/as de nivel inicial. Opcionalmente podés complementarlo con las lonas, y en el caso de ser lonas chicas, podés elegir entre dos modelos.'
    ,r500: 'El R-500 es el kit de Mis Ladrillos PROBOTS ideado para los inicios de la robótica, es perfecto para niños/as de 5 años en adelante. Se programa a través del control remoto y gracias a poseer dos motores, permite un gran número de vehículos robóticos al activarlos en sentido opuesto para lograr los giros.'
    ,r501: 'El R-501 es el kit de Mis Ladrillos PROBOTS pensado para adquirir los conceptos fundamentales de tecnología y robótica.'
    ,r502: 'El R-502 es el kit de Mis Ladrillos PROBOTS pensado para adquirir los conceptos fundamentales de tecnología y robótica. Para chicas y chicos de 9 años en adelante. Ladrillo programable R8 con electrónica Arduino y 8 conectores telefónicos. Micro parlante, leds y receptor infrarrojo incorporados.'
    ,r503: 'El R-503 es el kit de Mis Ladrillos PROBOTS pensado para adquirir los conceptos fundamentales de tecnología y robótica. Para chicas y chicos de 11 años en adelante. Ladrillo programable R8 con electrónica Arduino y 8 conectores telefónicos. Bluetooth, micro parlante, leds y receptor infrarrojo incorporados.'
    ,r503a: 'El R-503 Agro es el kit de Mis Ladrillos PROBOTS pensado para adquirir los conceptos fundamentales de tecnología y robótica enfocado al Agro.'
    ,r503i: 'El R-503 es el kit de Mis Ladrillos PROBOTS pensado para adquirir los conceptos fundamentales de tecnología y robótica.'
    ,r503me: 'El R-503 Metalbot es el kit de Mis Ladrillos PROBOTS que incluye un conjunto de piezas metálicas ideales para constrcciones más sólidas, orugas especiales y 4 motores para tracción 4X4.'
    ,r503mi: 'El R-503 Microbit es el kit de Mis Ladrillos PROBOTS pensado para adquirir los conceptos fundamentales de tecnología y robótica.'
    ,r504: 'El R-504 Metalbot es el kit de Mis Ladrillos PROBOTS que incluye un conjunto de piezas metálicas ideales para construcciones más sólidas, orugas especiales y 3 motores tubulares metálicos con encoder.'
  };

  enlacesCompra = {
    kinderbot: 'http://tiendamisladrillos.com.ar/#!/producto/449/?opcion=a7v63'
    ,r500: 'http://tiendamisladrillos.com.ar/#!/producto/375/?opcion=a11v59'
    ,r501: 'http://tiendamisladrillos.com.ar/#!/producto/377/?opcion=a11v59'
    ,r502: 'http://tiendamisladrillos.com.ar/#!/producto/379/?opcion=a11v59'
    ,r503: 'http://tiendamisladrillos.com.ar/#!/producto/403/?opcion=a11v59'
    ,r503a: 'http://tiendamisladrillos.com.ar/#!/producto/395/?opcion=a11v59'
    ,r503i: 'http://tiendamisladrillos.com.ar/#!/producto/397/?opcion=a11v59'
    ,r503me: 'http://tiendamisladrillos.com.ar/#!/producto/497/?opcion=a11v59'
    ,r503mi: 'http://tiendamisladrillos.com.ar/#!/producto/407/?opcion=a11v61'
    ,r504: 'http://tiendamisladrillos.com.ar/#!/producto/503/?opcion=a11v59'
  };
  
  actividades = {
    kinderbot: 'http://misladrillos.com/ml/proyectos/productos/kinderbot-marinos/'
    ,r500: 'http://tiendamisladrillos.com.ar/#!/producto/375/?opcion=a11v59'
    ,r501: 'http://misladrillos.com/ml/proyectos/?kit=r501'
    ,r502: 'http://misladrillos.com/ml/proyectos/?kit=r502'
    ,r503: 'http://misladrillos.com/ml/proyectos/?kit=r503'
    ,r503a: 'http://misladrillos.com/ml/proyectos/?kit=r504-agro'
    ,r503i: 'http://misladrillos.com/ml/proyectos/?kit=r504-industria'
    ,r503me: 'http://misladrillos.com/ml/proyectos/?kit=r503-metalbot'
    ,r503mi: 'http://misladrillos.com/ml/proyectos/?kit=r503-microbit'
    ,r504: 'http://misladrillos.com/ml/proyectos/?kit=r503-metalbot'
    };

  constructor() {
    this.paginaActual = "robotics"
    this.productos = new Array<Producto>();
    this.productoModal = new Producto();
    this.productos.push(new Producto({id: '1', actividades: this.actividades.kinderbot, producto: this.enlacesCompra.kinderbot, imagen: this.imagenes.kinderbot, nombre: 'Kinderbot', descripcion: this.descripciones.kinderbot, nivel: Niveles.Inicial, piezas: 100, perifericos: 1, plataforma: 'mBlock', bluetooth: 'Opcional'}));
    this.productos.push(new Producto({id: '2',/* actividades: this.actividades.r500,*/ producto: this.enlacesCompra.r500, imagen: this.imagenes.r500, nombre: 'R-500', descripcion: this.descripciones.r500, nivel: Niveles.Inicial, piezas: 500, perifericos: 3, plataforma: 'mBlock', bluetooth: 'No'}));
    this.productos.push(new Producto({id: '3', actividades: this.actividades.r501, producto: this.enlacesCompra.r501, imagen: this.imagenes.r501, nombre: 'R-501', descripcion: this.descripciones.r501, nivel: Niveles.Primaria, piezas: 500, perifericos: 9, plataforma: 'mBlock', bluetooth: 'No'}));
    this.productos.push(new Producto({id: '4', actividades: this.actividades.r502, producto: this.enlacesCompra.r502, imagen: this.imagenes.r502, nombre: 'R-502', descripcion: this.descripciones.r502, nivel: Niveles.Primaria, piezas: 500, perifericos: 10, plataforma: 'mBlock', bluetooth: 'Incluido'}));
    this.productos.push(new Producto({id: '5', actividades: this.actividades.r503, producto: this.enlacesCompra.r503, imagen: this.imagenes.r503, nombre: 'R-503', descripcion: this.descripciones.r503, nivel: Niveles.Secundaria, piezas: 500, perifericos: 13, plataforma: 'mBlock', bluetooth: 'Incluido'}));
    this.productos.push(new Producto({id: '6', actividades: this.actividades.r503a, producto: this.enlacesCompra.r503a, imagen: this.imagenes.r503a, nombre: 'R-503 Agro', descripcion: this.descripciones.r503a, nivel: Niveles.Secundaria, piezas: 500, perifericos: 21, plataforma: 'mBlock', bluetooth: 'Incluido'}));
    this.productos.push(new Producto({id: '7', actividades: this.actividades.r503i, producto: this.enlacesCompra.r503i, imagen: this.imagenes.r503i, nombre: 'R-503 Industria', descripcion: this.descripciones.r503i, nivel: Niveles.Secundaria, piezas: 500, perifericos: 18, plataforma: 'mBlock', bluetooth: 'Incluido'}));
    this.productos.push(new Producto({id: '8', actividades: this.actividades.r503me, producto: this.enlacesCompra.r503me, imagen: this.imagenes.r503me, nombre: 'R-503 Metalbot', descripcion: this.descripciones.r503me, nivel: Niveles.Secundaria, piezas: 500, perifericos: 16, plataforma: 'mBlock', bluetooth: 'Incluido'}));
    this.productos.push(new Producto({id: '9', actividades: this.actividades.r503mi, producto: this.enlacesCompra.r503mi, imagen: this.imagenes.r503mi, nombre: 'R-503 Microbit', descripcion: this.descripciones.r503mi, nivel: Niveles.Secundaria, piezas: 500, perifericos: 10, plataforma: 'MakeCode', bluetooth: 'Incluido'}));
    this.productos.push(new Producto({id: '10', actividades: this.actividades.r504, producto: this.enlacesCompra.r504, imagen: this.imagenes.r504, nombre: 'R-504', descripcion: this.descripciones.r504, nivel: Niveles.Secundaria, piezas: 500, perifericos: 18, plataforma: 'mBlock', bluetooth: 'Incluido'}));
  }

  ngOnInit(): void {
  }

  
detallesProducto(id: String) {
  this.productoModal = this.findProductoById(id);
  jQuery(this.detallesModal.nativeElement).show(); 

}

actividadesProducto(id: String) {
  var productoSeleccionado = this.findProductoById(id);
  open(productoSeleccionado.actividades, '_blank');
}

findProductoById(id: String): Producto {
  var ret: Producto;

  this.productos.forEach( (value: Producto) => {
    if(value.id == id){
      ret = value;
    }
  });

  return ret;
}

}

enum Niveles {
  NoEspecificado = 'No especificado',
  Inicial = 'Inicial',
  Primaria = 'Primaria',
  Secundaria = 'Secundaria'
}

class Producto {
  id: string;
  imagen: string;
  nombre: string;
  descripcion: string;
  nivel: Niveles;
  piezas: Number;
  perifericos: Number;
  plataforma: string;
  bluetooth: string;
  producto: string;
  detalle: string;
  actividades: string;

  constructor({id = '', imagen = '', nombre = '', descripcion = '', nivel = Niveles.NoEspecificado, piezas = 0, 
  perifericos = 0, plataforma = '', bluetooth = '', producto = '', detalle = '', actividades = ''} = {}) {
    
    this.id = id;
    this.imagen = imagen;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.nivel = nivel;
    this.piezas = piezas;
    this.perifericos = perifericos;
    this.plataforma = plataforma;
    this.bluetooth = bluetooth;
    this.producto = producto;
    this.detalle = detalle;
    this.actividades = actividades;
  }

}
