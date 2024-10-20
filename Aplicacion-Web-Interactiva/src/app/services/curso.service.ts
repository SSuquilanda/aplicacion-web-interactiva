import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CursoService {
  
  constructor(private http: HttpClient) { }

  obtenerDatoAleatorio(): Observable<any> {
    return this.http.get('https://random-data-api.com/api/v2/users');
  }
}
