import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Articulo } from 'src/app/entidades/articulo.model';
import { ArticuloService } from '../articulo.service';

@Component({
  selector: 'app-articulo-form',
  templateUrl: './articulo-form.component.html',
  styleUrls: ['./articulo-form.component.scss']
})
export class ArticuloFormComponent {
  @Input() idArticulo?:  number;
  @Input() articulo?: Articulo;
  public articuloEncontrado?: Articulo | undefined;


  constructor(
    private route: ActivatedRoute,
    private articuloService: ArticuloService
  ){}
  
  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      const idArticulo = params.get('idArticulo');
      if (idArticulo) {
        this.obtenerArticuloPorId(parseInt(idArticulo, 10));
      }
    });
  }

  private obtenerArticuloPorId(id: number): void {
    this.articuloService.obtenerArticulosRest().subscribe(
      (data) => {
        const articuloEncontrado = data.find((articulo) => articulo.id === id);
        if (articuloEncontrado) {
          this.articuloEncontrado = new Articulo(
            articuloEncontrado.id,
            articuloEncontrado.nombre,
            articuloEncontrado.precio,
            articuloEncontrado.descripcion,
            articuloEncontrado.imagen
          );
        } else {
          console.log('No se encontró ningún artículo con el ID proporcionado.');
        }
      }
    );
  }
  
}
