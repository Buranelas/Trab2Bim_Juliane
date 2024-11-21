import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  standalone: true,
  imports: [CommonModule],
})
export class FavoritesComponent implements OnInit  {
  favorites: any[] = [];

  ngOnInit() {
    const savedFavorites = localStorage.getItem('favorites');
    this.favorites = savedFavorites ? JSON.parse(savedFavorites) : [];
  }

  removeFavorite(imdbID: string) {
    this.favorites = this.favorites.filter((movie) => movie.imdbID !== imdbID);
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }
}
