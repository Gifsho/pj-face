import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ImageService } from '../../services/image.service';
import { NgFor } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavigationComponent } from '../navigation/navigation.component';

@Component({
  selector: 'app-topten',
  standalone: true,
  imports: [RouterLink, NgFor, MatToolbarModule, NavigationComponent
  ],
  templateUrl: './topten.component.html',
  styleUrl: './topten.component.scss'
})
export class ToptenComponent implements OnInit {
  images: any[] = [];
  topTenImages: any[] = [];

  constructor(private imageService: ImageService) { }

  async ngOnInit(): Promise<void> {
    try {
      this.topTenImages = await this.getTopTenImages();
    } catch (error) {
      console.error(error);
    }
  }

  async getTopTenImages(): Promise<any[]> {
    return new Promise((resolve, reject) => {
      this.imageService.getAllImages().subscribe(
        (data: any[]) => {
          const sortedData = data[0].slice().sort((a: any, b: any) => b.points - a.points);
          const topTenImages = sortedData.slice(0, 10);
          resolve(topTenImages);
        },
        error => {
          console.error(error);
          reject(error);
        }
      );
    });
  }
}


