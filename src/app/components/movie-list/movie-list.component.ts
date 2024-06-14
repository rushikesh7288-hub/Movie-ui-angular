
import { Component, OnInit, HostListener } from '@angular/core';
import { MovieServiceService } from 'src/app/services/movie-service.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  movies: any[] = [];
  genres: any[] = [];
  selectedGenres: string[] = [];
  year: number = 2012;
  loading: boolean = false;

  constructor(private movieService: MovieServiceService) {}

  ngOnInit(): void {
    this.loadGenres();
    this.loadMovies();
  }

  loadMovies() {
    if (this.loading) return;
    this.loading = true;
    const genreString = this.selectedGenres.join(',');
    if (genreString) {
      this.movieService.getMoviesByGenre(this.year, genreString).subscribe(data => {
        this.movies = this.movies.concat(data.results);
        this.loading = false;
      });
    } else {
      this.movieService.getMoviesByYear(this.year).subscribe(data => {
        this.movies = this.movies.concat(data.results);
        this.loading = false;
      });
    }
  }

 loadGenres() {
    this.movieService.getGenres().subscribe(data => {
      this.genres = data.genres;
    });
  }

  onGenreSelected(genreIds:any) {
    this.selectedGenres = genreIds;
    console.log(this.selectedGenres)
    this.movies = [];
    this.year = 2012;
    this.loadMovies();
  }
  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
    const max = document.documentElement.scrollHeight;
    if (pos >= max && !this.loading) {
      this.year--;
      this.loadMovies();
    } else if (document.documentElement.scrollTop === 0 && !this.loading) {
      this.year++;
      this.loadMovies();
    }
  }

}
