import { UnidadAsistente } from './UnidadAsistente';
import { UnidadEnlace } from './UnidadEnlace';


export class ControladorAsistente {

    unidades: UnidadAsistente[];
    inicial: string;
    unidadActual: UnidadAsistente;
    hijosActual: UnidadAsistente[];
    actualizarActual: string;

    constructor() {

    }

    agregarUnidad(nuevaUnidad: UnidadAsistente): ControladorAsistente{

        if(!nuevaUnidad) return this;
        this.unidades[nuevaUnidad.id] = nuevaUnidad;
        if(this.unidades.length == 1) this.inicial = nuevaUnidad.id;
        return this;
    }

    iniciarAsistente(): UnidadAsistente {

        this.unidades.forEach( (value: UnidadAsistente) => {
            if(value.siguiente){
                var siguiente = this.unidades[value.siguiente];
                if(siguiente.padre) this.buscarHijos(siguiente.padre);
                siguiente.hijos = this.hijosActual;
            }
        });

        this.unidadActual = this.unidades[this.inicial];
        return this.unidadActual;
    }

    siguiente(): UnidadAsistente {
        if(this.actualizarActual){
            this.unidadActual.siguiente = this.actualizarActual;
            this.actualizarActual = '';
        }
        if(this.unidadActual.siguiente) return this.unidadActual;
        this.unidadActual = this.unidades[this.unidadActual.siguiente];
        return this.unidadActual;
    }

    anterior(): UnidadAsistente {
        if(this.actualizarActual){
            this.unidadActual.anterior = this.actualizarActual;
            this.actualizarActual = '';
        }
        if(this.unidadActual.anterior) return this.unidadActual;
        this.unidadActual = this.unidades[this.unidadActual.anterior];
        return this.unidadActual;
    }

    buscarHijos(idPadre: string) {

        this.hijosActual = [];
        this.unidades.forEach( (value: UnidadAsistente) => {
            if(value.id == idPadre)
                this.hijosActual.push(value);
        });
    }

    actualizar(idUnidad: string) {

        if(this.unidades[idUnidad]) this.actualizarActual = idUnidad;
    }

}
