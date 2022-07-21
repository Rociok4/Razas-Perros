import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Razas } from '../../interfaces/razas.interface';
import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: []
})


export class HeroeComponent implements OnInit {

  raza!: Razas;

  constructor(private activatedRoute: ActivatedRoute, 
              private HeroesService: HeroesService,
              private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap(({id})=> this.HeroesService.getRazaporId(id)))
        .subscribe(raza => this.raza = raza)
  }

  regresar(){
    this.router.navigate(['/heroes/listado']);
  }

}
