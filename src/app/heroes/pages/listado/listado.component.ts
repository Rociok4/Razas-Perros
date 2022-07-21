import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Razas } from '../../interfaces/razas.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: [ ]
})
export class ListadoComponent implements OnInit {

  razas: Razas[]=[];

  constructor(private HeroesService: HeroesService) { }

  ngOnInit(): void {
    this.HeroesService.getRazas().subscribe(razas => {
      this.razas = razas
    });
  }

}
