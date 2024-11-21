import { Routes } from '@angular/router';
import { SearchPageComponent } from './pages/search/search.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';

export const routes: Routes = [
  { path: '', component: SearchPageComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'movie/:id', component: MovieDetailsComponent },
];
