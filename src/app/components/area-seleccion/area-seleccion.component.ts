import { Component, Input, OnInit } from '@angular/core';

import { IJugador } from 'src/app/interfaces/i-jugador';
import { CargaJugadorService } from 'src/app/servicios/carga-jugador.service';

@Component({
  selector: 'area-seleccion',
  templateUrl: './area-seleccion.component.html',
  styleUrls: ['./area-seleccion.component.css']
})
export class AreaSeleccionComponent implements OnInit{
   jugadores: IJugador[]=[];
  indiceSeleccionado = -1;
  numLuchador = -1;


  activarLuchador(indice: number) {
    this.indiceSeleccionado = indice;
    console.log(this.indiceSeleccionado);

   /*  console.log('activarJugador')
    console.log(this.jugadores[indice].colorAsociado);
    return true; */
}
  constructor(private cargaJugador: CargaJugadorService) {

  }
  ngOnInit(){
  this.jugadores = this.cargaJugador.getJugadores();
}

  mostrarJugador(indice:number) {
    this.jugadores[indice].nombre;
  }


}
