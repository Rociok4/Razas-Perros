import { Component, OnInit } from '@angular/core';
import { Razas } from '../../interfaces/razas.interface';
import { HeroesService } from '../../services/heroes.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: []
})
export class BuscarComponent implements OnInit {

  termino: string = '';
  razas: Razas[] = [];
  RazaSeleccionada!: Razas | undefined;
  

  constructor(private HeroesService: HeroesService) { }

  ngOnInit(): void {
  }

  buscando(){
    this.HeroesService.getSugerencias(this.termino.trim())
    .subscribe(razas => this.razas = razas)
  }

  opcionSeleccionada(event: MatAutocompleteSelectedEvent){

    if(!event.option.value){
      this.RazaSeleccionada = undefined
      return;
    }

    const raza: Razas = event.option.value;
    this.termino = raza.id!;


    this.HeroesService.getRazaporId(raza.id!)
    .subscribe(raza => this.RazaSeleccionada = raza);

  }
}
