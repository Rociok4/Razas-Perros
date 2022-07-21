import { Component, Input } from '@angular/core';
import { Razas } from '../../interfaces/razas.interface';

@Component({
  selector: 'app-raza-tarjeta',
  templateUrl: './raza-tarjeta.component.html',
  styleUrls: []
})
export class RazaTarjetaComponent  {

  @Input() raza!: Razas;

 

}
