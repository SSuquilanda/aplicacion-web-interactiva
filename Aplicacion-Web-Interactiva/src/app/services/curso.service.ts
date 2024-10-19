import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  
  constructor() { }
  obtenerImagenCurso(nombre: string): string {
    // Aquí puedes usar APIs para obtener imágenes reales
    return 'https://via.placeholder.com/150'; // Imagen de ejemplo
  }
}
