import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RickAndMortyService {
  private apiUrl = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) {}

  /**
   * Obtiene la lista de personajes con soporte para paginación.
   * @param page Número de la página a consultar (por defecto: 1).
   */
  getCharacters(page: number = 1): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?page=${page}`);
  }

  /**
   * Obtiene los detalles de un personaje específico.
   * @param id ID del personaje a consultar.
   */
  getCharacterById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}
