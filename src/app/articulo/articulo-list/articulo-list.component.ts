import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';  
import { Articulo } from '../../entidades/articulo.model';
import { ArticuloService } from '../articulo.service';
import { registerLocaleData } from '@angular/common'; // para descargar registro del formato del numero en españa

@Component({
  selector: 'app-articulo-list',
  templateUrl: './articulo-list.component.html',
  styleUrls: ['./articulo-list.component.scss']
})

export class ArticuloListComponent {
  articulos: Articulo[] = [];
  modo?: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private articuloService: ArticuloService
  ) {}

  ngOnInit(): void {
    this.obtenerParametros();
    this.obtenerArticulosRest();
  }

  private obtenerArticulosRest() {
    this.articuloService.obtenerArticulosRest().subscribe(
      (data) => {
        data.forEach( (articulo) => {
          const articuloAIncluir: Articulo = new Articulo(articulo.id, articulo.nombre, articulo.precio, articulo.descripcion, articulo.imagen);
          this.articulos.push(articuloAIncluir);
        })
      }
    )  
  }

  private obtenerParametros() : void {
    this.modo = (this.route.snapshot.queryParamMap.get("modo")) ?? undefined;
  }

  public navegarAFicha(idArticulo: number): void {
    this.router.navigate(['articulo-form'], { queryParams: { idArticulo: idArticulo } });
  }

}
