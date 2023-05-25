import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Libro } from '../shared/libro';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  constructor(private http: HttpClient) { }
  crearLibro(libro: Libro): Observable<any> {
    return this.http.post(`${environment.backendAPI}/libros/create`, libro);
  }

  obtenerLibros(): Observable<Libro[]> {
    return this.http.get<Libro[]>(`${environment.backendAPI}/libros/get`);
  }
}

