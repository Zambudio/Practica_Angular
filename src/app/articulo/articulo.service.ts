import { Injectable } from '@angular/core';
import { Articulo } from '../entidades/articulo.model';
import { HttpClient } from '@angular/common/http'; // para mook
import { Observable, map } from 'rxjs';
import { IArticulo } from './articulo.interface';

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {
  
  private urlEndPoint: string = "http://localhost:3001/Items";

  constructor(
    private http: HttpClient
  ) { }


  //para usar el mooks
  public obtenerArticulosRest(): Observable<IArticulo[]> {

    return this.http.get<IArticulo[]>(this.urlEndPoint);

  }

  public getArticuloById(id: number): Observable<IArticulo> {
    return this.obtenerArticulosRest().pipe(
      map((articulos: IArticulo[]) => {
        const articuloEncontrado = articulos.find(articulo => articulo.id === id);
        if (articuloEncontrado) {
          return articuloEncontrado;
        } else {
          throw new Error(`No se encontró ningún artículo con el ID ${id}`);
        }
      })
    );
  }
  
}
