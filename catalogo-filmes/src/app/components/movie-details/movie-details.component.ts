import { Component, OnInit  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  standalone: true,
  imports: [CommonModule], // Importando o CommonModule
})
export class MovieDetailsComponent implements OnInit {
  movie: any;
  loading: boolean = true; // Estado de carregamento

  constructor(private route: ActivatedRoute, private movieService: MovieService) {}

  ngOnInit() {
    // Obtém o ID do filme da URL
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.movieService.getMovieDetails(id).subscribe({
        next: (response) => {
          console.log('Detalhes do filme recebidos:', response);
          this.movie = response;
          this.loading = false; // Termina o carregamento
        },
        error: (error) => {
          console.error('Erro ao carregar detalhes do filme:', error);
          this.loading = false; // Termina o carregamento mesmo com erro
        },
      });
    } else {
      console.error('ID do filme não encontrado na URL.');
      this.loading = false; // Termina o carregamento
    }
  }
}

