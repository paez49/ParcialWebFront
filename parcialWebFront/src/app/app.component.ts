import { Component } from '@angular/core';
import { LibroService } from './services/libro.service';
import { Libro } from './shared/libro';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private libroService:LibroService){}
  nuevoLibro: Libro = new Libro();
  libros: Libro[] = [];
  title = 'parcialWebFront';
  ngOnInit(): void {
    this.obtenerLibros();
  }

  crearLibro(): void {
    this.libroService.crearLibro(this.nuevoLibro).subscribe(() => {
      this.obtenerLibros();
      this.nuevoLibro = new Libro();
    });
  }

  obtenerLibros(): void {
    this.libroService.obtenerLibros().subscribe(libros => {
      this.libros = libros;
    });
  }
}
