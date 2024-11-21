import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from '../../components/movie-list/movie-list.component';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule, MovieListComponent], // Adicionando FormsModule
})
export class SearchPageComponent {
  searchQuery: string = '';
  selectedGenre: string = ''; // Gênero selecionado
  movies: any[] = [];
  loading: boolean = false; // Estado de carregamento

  constructor(private movieService: MovieService) {}

  // Método para buscar filmes
  searchMovies() {
    if (this.searchQuery.trim()) {
      this.loading = true;
  
      // Adiciona animação no botão
      const searchButton = document.querySelector('button.search-button');
      searchButton?.classList.add('loading');
  
      this.movieService.searchMovies(this.searchQuery).subscribe({
        next: (response: any) => {
          this.movies = response.Search || [];
          this.loading = false;
  
          // Remove animação do botão
          searchButton?.classList.remove('loading');
        },
        error: () => {
          this.loading = false;
          searchButton?.classList.remove('loading');
        },
      });
    }
  }
}
