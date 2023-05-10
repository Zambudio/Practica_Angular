import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // para mooks


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AcercadeComponent } from './acercade/acercade.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { ArticuloFormComponent } from './articulo/articulo-form/articulo-form.component';
import { ArticuloListComponent } from './articulo/articulo-list/articulo-list.component';
import { ArticuloCardComponent } from './articulo/articulo-card/articulo-card.component';
import { CarouselComponent } from './layouts/carousel/carousel.component';
import { BannerComponent } from './layouts/banner/banner.component';
import { CategoriasComponent } from './layouts/categorias/categorias.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AcercadeComponent,
    NavbarComponent,
    FooterComponent,
    ArticuloFormComponent,
    ArticuloListComponent,
    ArticuloCardComponent,
    CarouselComponent,
    BannerComponent,
    CategoriasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule    // para mooks
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
