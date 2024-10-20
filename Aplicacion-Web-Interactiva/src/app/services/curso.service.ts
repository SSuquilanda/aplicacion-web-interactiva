import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CursoService {
  
  private unsplashApiUrl = 'https://api.unsplash.com/photos/random';
  private unsplashAccessKey = 'TU_ACCESS_KEY'; // Cambia por tu clave de acceso de Unsplash

  constructor(private http: HttpClient) { }

  obtenerImagenCurso(nombre: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Client-ID ${this.unsplashAccessKey}`
    });
  
    return this.http.get(`${this.unsplashApiUrl}?query=${nombre}`, { headers })
      .pipe(
        catchError(error => {
          console.error('Error al obtener la imagen:', error);
          return throwError(error); // Puedes mostrar un mensaje personalizado aquí
        })
      );
}
}
