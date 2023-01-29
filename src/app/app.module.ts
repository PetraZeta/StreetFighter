import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CargaJugadorService } from './servicios/carga-jugador.service';
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { AreaSeleccionComponent } from './components/area-seleccion/area-seleccion.component';
import { RetratoLuchadorComponent } from './components/retrato-luchador/retrato-luchador.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AreaSeleccionComponent,
    RetratoLuchadorComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    MatButtonToggleModule
  ],
  providers: [CargaJugadorService],
  bootstrap: [AppComponent]
})
export class AppModule { }

