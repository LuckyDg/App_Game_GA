import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Videojuego } from '../models/videojuego.interface';

@Injectable({
  providedIn: 'root'
})
export class VideojuegoService {

  private apiUrl = 'http://localhost:7000/api/videojuegos';

  constructor(private http: HttpClient) { }

  getVideojuegos(): Observable<Videojuego[]> {
    return this.http.get<Videojuego[]>(this.apiUrl);
  }

  getVideojuegoById(id: string): Observable<Videojuego> {
    return this.http.get<Videojuego>(`${this.apiUrl}/${id}`);
  }
  
  crearVideojuego(videojuego: Videojuego): Observable<Videojuego> {
    return this.http.post<Videojuego>(this.apiUrl, videojuego);
  }

  eliminarVideojuego(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
