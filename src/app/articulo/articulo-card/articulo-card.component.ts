import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Articulo } from 'src/app/entidades/articulo.model';
import { registerLocaleData } from '@angular/common'; // para descargar registro del formato del numero en españa
import localeEs from '@angular/common/locales/es';
registerLocaleData(localeEs);

@Component({
  selector: 'app-articulo-card',
  templateUrl: './articulo-card.component.html',
  styleUrls: ['./articulo-card.component.scss']
})
export class ArticuloCardComponent {

  @Input() articulo?: Articulo;
  @Input() textoBoton: string = "Pulsar";
  @Output() click: EventEmitter<number> = new EventEmitter<number>();
  @Output() articuloSeleccionado: EventEmitter<Articulo> = new EventEmitter<Articulo>();

  public pulsarBoton(): void {
    this.click.emit(this.articulo?.getId());
  }

  public enlazarArticulo(): void {
    this.articuloSeleccionado.emit(this.articulo);

  }

  
}
