import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Razas } from '../interfaces/razas.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private apiEndpoint: string = environment.apiEndpoint

  constructor(private http: HttpClient) { }

  getRazas (): Observable<Razas[]>{
    return this.http.get<Razas[]>( `${this.apiEndpoint}/razas`)
  }

  getRazaporId (id: string):Observable<Razas>{
    return this.http.get<Razas>(`${this.apiEndpoint}/razas/${id}`)

  }

  getSugerencias(termino: string): Observable<Razas[]>{
    return this.http.get<Razas[]>(`${this.apiEndpoint}/razas?q= ${termino}&limit=6`)

  }

  agregarRaza (raza: Razas): Observable<Razas>{
    if(raza.alt_img === '') raza.alt_img = 'assets/razas/no-image.png';
    return this.http.post<Razas>(`${this.apiEndpoint}/razas`, raza)
  }

  actualizarRaza(raza: Razas):Observable<Razas> {
    return this.http.put<Razas>(`${this.apiEndpoint}/razas/${raza.id}`, raza);
  }

  borrarRaza(id: string):Observable<any> {
    return this.http.delete<any>(`${this.apiEndpoint}/razas/${id}`);
  }

}
