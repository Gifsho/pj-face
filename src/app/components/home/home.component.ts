import { Component, OnInit } from '@angular/core';
import { EloService } from '../../services/elo.service';
import { ImageService } from '../../services/image.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  images: any[] = [];
  character1Image: any = '';
  character2Image: any = '';

  constructor(private imageService: ImageService, private eloService: EloService) { }

  ngOnInit(): void {
    this.getAllImages();
  }

  getAllImages() {
    this.imageService.getAllImages().subscribe(
      data => {
        this.images = data;
        this.randomizeImages();
      },
      error => {
        console.error(error);
      }
    );
  }

  randomizeImages() {
    if (this.images.length > 0) {
      const data = this.images[0];
      const randomIndex1 = Math.floor(Math.random() * data.length);
      const randomIndex2 = Math.floor(Math.random() * data.length);
      this.character1Image = data[randomIndex1];
      this.character2Image = data[randomIndex2];
    }
  }
}

