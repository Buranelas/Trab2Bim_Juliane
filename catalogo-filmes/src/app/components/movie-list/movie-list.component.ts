import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  standalone: true,
  imports: [CommonModule], // Importando o CommonModule
})
export class MovieListComponent {
  @Input() movies: any[] = [];

  constructor(private router: Router) {}

  viewDetails(imdbID: string) {
    this.router.navigate(['/movie', imdbID]);
  }

  // Adiciona um filme aos favoritos
  addToFavorites(movie: any) {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    const alreadyFavorited = favorites.find((fav: any) => fav.imdbID === movie.imdbID);

    if (!alreadyFavorited) {
      favorites.push(movie);
      localStorage.setItem('favorites', JSON.stringify(favorites));
      alert(`${movie.Title} foi adicionado aos favoritos!`);
    } else {
      alert(`${movie.Title} já está na lista de favoritos.`);
    }
  }
}
