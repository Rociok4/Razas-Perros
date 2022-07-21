import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Razas } from '../../interfaces/razas.interface';
import { HeroesService } from '../../services/heroes.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: []
})
export class AgregarComponent implements OnInit {

  sizes = [
    {
      id: 'mini',
      desc: 'Mini'
    },
    {
      id: 'pequeño',
      desc: 'Pequeño'
    },
    
    {
      id: 'mediano',
      desc: 'Mediano'
    },
    
    {
      id: 'grande',
      desc: 'Grande'
    },
    {
      id: 'grande xl',
      desc: 'Grande XL'
    },
  ];

  raza: Razas = {
    raza: '',
    origen: '',
    temperamento:'',
    colores:'',
    tamano: '',
    alt_img: ''
  }



  constructor( private heroeService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    public dialog: MatDialog) { }

ngOnInit(): void {

  if( !this.router.url.includes('editar') ) {
    return;
  }
  
  this.activatedRoute.params
    .pipe(
    switchMap( ({id}) => this.heroeService.getRazaporId( id ) )
  )
  .subscribe( raza => this.raza = raza );
  
  }
  
  guardar() {
    if( this.raza.raza.trim().length === 0 ) {
    return;
  }
  
    if( this.raza.id ) {
  //Actualizar
  this.heroeService.actualizarRaza( this.raza )
    .subscribe( raza => this.mostrarSnackBar ('Registro Actualizado'));
       
  }else {
  //Crear
  this.heroeService.agregarRaza( this.raza )
    .subscribe( raza => {
    this.router.navigate(['/heroes/editar', raza.id]);
  })
  
  }
  
  }
  
  borrarRaza(){
   const dialog = this.dialog.open(ConfirmarComponent, {
      width: '250px',
      data: this.raza
    });
    
    dialog.afterClosed().subscribe(
      (result) => {
        if (result) {
          this.heroeService.borrarRaza (this.raza.id!)
            .subscribe (resp => {
              this.router.navigate (['/heroes']);
            })
        }
      }
    )
  
  }


  
  
  mostrarSnackBar(mensaje: string){
     this.snackBar.open(mensaje, 'Cerrar', {
      duration: 2500
    });

    
  }
  
}

  

