import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {
  private apiKey = '48fb11feb55964546bd092e732cba86b';
  private apiUrl = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) { }

  getMoviesByYear(year: number, page: number = 1): Observable<any> {
    return this.http.get(`${this.apiUrl}/discover/movie?api_key=${this.apiKey}&sort_by=popularity.desc&primary_release_year=${year}&page=${page}&vote_count.gte=100`);
  }

  getGenres(): Observable<any> {
    return this.http.get(`${this.apiUrl}/genre/movie/list?api_key=${this.apiKey}`);
  }
  getMoviesByGenre(year: number, genreIds: string, page: number = 1): Observable<any> {
    return this.http.get(`${this.apiUrl}/discover/movie?api_key=${this.apiKey}&sort_by=popularity.desc&primary_release_year=${year}&page=${page}&vote_count.gte=100&with_genres=${genreIds}`);
  }
}
