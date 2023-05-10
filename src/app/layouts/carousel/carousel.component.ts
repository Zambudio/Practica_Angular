import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // para mook

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  public imageUrls: string[] = [];
  
  constructor(
    private http: HttpClient
    ) {}

    ngOnInit(): void {
      this.getImageUrls();
    }
    
    private getImageUrls(): void {

      const urlEndPoint: string = "http://localhost:3001/ImagenesCarrousel";
      this.http.get<string[]>(urlEndPoint).subscribe(respuesta => {
        this.imageUrls = respuesta;
      });
    }

}
