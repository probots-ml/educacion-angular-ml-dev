
export class UnidadEnlace {

  enlace: string;
  descripcion: string;
  
  constructor({enlace = '', descripcion = ''} = {}) {
      this.enlace = enlace;
      this.descripcion = descripcion;
  }
}

export class UnidadAsistente {

  id: string;
  padre: string;
  cabecera: string;
  titulo: string;
  descripcion: string;
  imagen: string;
  anterior: string;
  siguiente: string;
  hijos: UnidadAsistente[];
  enlace: UnidadEnlace;

  constructor({ id = '', padre = '', titulo = '', 
              cabecera = '', descripcion = '', imagen = '',
              anterior = '', siguiente = '', enlace = new UnidadEnlace()} = {}) {

      this.padre = padre;
      this.id = id;
      this.titulo = titulo;
      this.cabecera = cabecera;
      this.descripcion = descripcion;
      this.anterior = anterior;
      this.siguiente = siguiente;
      this.enlace = enlace;
      this.imagen = imagen;
  }

}

export class ControladorAsistente {

  unidades: Array<UnidadAsistente>;
  inicial: string;
  unidadActual: UnidadAsistente;
  hijosActual: Array<UnidadAsistente>;
  actualizarActual: string;

  constructor() {
    this.unidades = new Array<UnidadAsistente>();
    this.actualizarActual = '';
  }

  agregarUnidad(nuevaUnidad: UnidadAsistente): ControladorAsistente{

      if(!nuevaUnidad) return this;
      this.unidades.push(nuevaUnidad);
      return this;
  }

  iniciarAsistente(): UnidadAsistente {

      this.unidades.forEach( (value: UnidadAsistente) => {
        this.buscarHijos(value.id);
        value.hijos = this.hijosActual;

      });

       
      this.unidadActual = this.unidades[0];
      return this.unidadActual;
  }

  reiniciarAsistente(): UnidadAsistente {
    this.unidades.forEach( (value: UnidadAsistente) => {
      if(value.hijos.length != 0){
        value.siguiente = '';
      }
    });
    this.unidadActual = this.unidades[0];
    this.actualizarActual = '';
    return this.unidadActual;
  }

  siguiente(): UnidadAsistente {
      if(this.actualizarActual.length != 0){
        
        this.unidadActual.siguiente = this.unidades[this.indiceIdUnidad(this.actualizarActual)].siguiente;
        this.actualizarActual = '';
      }
      if(this.unidadActual.siguiente.length == 0) return this.unidadActual;
      
      this.unidadActual = this.unidades[this.indiceIdUnidad(this.unidadActual.siguiente)];
      return this.unidadActual;
  }

  anterior(): UnidadAsistente {
      if(this.actualizarActual.length != 0){
          this.unidadActual.anterior =  this.unidades[this.indiceIdUnidad(this.actualizarActual)].anterior;
          this.actualizarActual = '';
      }
      if(this.unidadActual.anterior.length == 0) return this.unidadActual;
      this.unidadActual = this.unidades[this.indiceIdUnidad(this.unidadActual.anterior)];
      return this.unidadActual;
  }

  buscarHijos(idPadre: string) {

      this.hijosActual = [];
      this.unidades.forEach( (value: UnidadAsistente) => {
          if(value.padre == idPadre)
              this.hijosActual.push(value);
      });
  }

  actualizar(idUnidad: string) {
      if(this.existeUnidad(idUnidad)) this.actualizarActual = idUnidad;
  }

  indiceUnidad(unidad: UnidadAsistente): number {
    return this.indiceIdUnidad(unidad.id);
  }

  indiceIdUnidad(idUnidad: string): number {
    var indice = -1;
    this.unidades.forEach( (value: UnidadAsistente, index: number) => {
      if(value.id == idUnidad){
        indice = index;
      }
    });
    return indice;
  }

  existeUnidad(idUnidad: string): boolean {
    return this.indiceIdUnidad(idUnidad) >= 0 ? true : false;
  }

}
