import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private API_URL = 'https://www.omdbapi.com/';
  private API_KEY = '3a36c2e'; // Substitua pela sua chave da OMDb API

  constructor(private http: HttpClient) {}

  searchMovies(title: string) {
    return this.http
      .get(`${this.API_URL}?apikey=${this.API_KEY}&s=${title}`)
      .pipe(catchError(this.handleError));
  }

  getMovieDetails(imdbID: string) {
    return this.http.get(`${this.API_URL}?apikey=${this.API_KEY}&i=${imdbID}`)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.error('Erro ao acessar a API:', error.message);
    return throwError(() => new Error('Erro ao acessar os dados. Tente novamente mais tarde.'));
  }
}
