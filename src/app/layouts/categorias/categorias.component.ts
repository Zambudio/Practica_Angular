import { Component } from '@angular/core';
import { CategoriaService } from './categoria.service';
import { Categoria } from 'src/app/entidades/categoria.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent {

  categorias: Categoria[] = [];

  constructor(
    private categoriaService: CategoriaService,
    private router : Router
  ){}

  ngOnInit(): void {
    this.obtenerCategorias();
  }

  private obtenerCategorias() {
    this.categoriaService.obtenerCategoria().subscribe(
      (data) => {        
        data.forEach( (categoria) => {
          const categoriaAIncluir: Categoria = new Categoria(categoria.nombre, categoria.imagen, categoria.descripcion);
          this.categorias.push(categoriaAIncluir);
        })
      }
    )
  }

  public navegarACategoria(categoria: number): void {
    this.router.navigate(['categoria',categoria]);
  }

}
