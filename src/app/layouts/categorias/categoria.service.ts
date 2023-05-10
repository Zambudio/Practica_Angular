import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'; // para mook
import { ICategoria } from './categoria.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(
    private http: HttpClient
  ) { }

  public obtenerCategoria(): Observable<ICategoria[]> {

    const urlEndPoint: string = "http://localhost:3001/Categorias";
    return this.http.get<ICategoria[]>(urlEndPoint);
  }
}
