import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  public imageUrls: string[] = [];

  constructor(
    private http: HttpClient
    ) {}

    ngOnInit(): void {
      this.getImageUrls();
    }
    
    private getImageUrls(): void {
      const urlEndPoint: string = "http://localhost:3001/ImagenesBanner";
      
      this.http.get<string[]>(urlEndPoint).subscribe(respuesta => {
        this.imageUrls = respuesta;
      });
    }
}

