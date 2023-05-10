import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AcercadeComponent } from './acercade/acercade.component';
import { ArticuloListComponent } from './articulo/articulo-list/articulo-list.component';
import { ArticuloFormComponent } from './articulo/articulo-form/articulo-form.component';
import { CategoriasComponent } from './layouts/categorias/categorias.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'acercade', component: AcercadeComponent},
  { path: 'articulos', component:ArticuloListComponent},
  { path: 'articulo-form', component: ArticuloFormComponent },
  { path: 'categorias/:nombreCategoria', component:CategoriasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
