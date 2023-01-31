import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'barraAtributos'
})
export class BarraAtributosPipe implements PipeTransform {

  transform( value: number): number {
    let propiedad: number;
    propiedad = 100 - value * 10 ;
    return propiedad;
  }

}
