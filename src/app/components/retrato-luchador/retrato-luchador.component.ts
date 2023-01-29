import { Component, OnInit, Input, Output } from '@angular/core';
import { IJugador } from 'src/app/interfaces/i-jugador';
/* import { CargaJugadorService } from 'src/app/servicios/carga-jugador.service'; */
@Component({
  selector:  'retrato-luchador, [retrato-luchador]',
  templateUrl: './retrato-luchador.component.html',
  styleUrls: ['./retrato-luchador.component.css']
})
export class RetratoLuchadorComponent implements OnInit {
  /* @Input indiceSeleccionado;
  @Input numLuchador
  @Output luchadorSeleccionado */
  /*  @Input() jugador: IJugador; */
 /*  @Input () numLuchador: number; */



 /*  jugadores: IJugador[]=[]; */


/*   retrato: string; */
  constructor(/* private cargaJugador: CargaJugadorService */) {

  }
  ngOnInit(): void {
     /*  this.jugador = this.cargaJugador.getJugadores(); */
  }
}
