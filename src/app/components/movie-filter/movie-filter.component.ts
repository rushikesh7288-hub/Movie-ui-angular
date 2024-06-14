import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MovieServiceService  } from 'src/app/services/movie-service.service';
@Component({
  selector: 'app-movie-filter',
  templateUrl: './movie-filter.component.html',
  styleUrls: ['./movie-filter.component.scss']
})
export class MovieFilterComponent {
  genres: any[] = [];
  @Output() genreSelected = new EventEmitter<string[]>();

  constructor(private movieService: MovieServiceService) { }

  ngOnInit(): void {
    this.movieService.getGenres().subscribe(data => {
      this.genres = data.genres;
    });
  }

  onGenreChange(event: any, genreId: string) {
    const index = this.genres.findIndex(genre => genre.id === genreId);
    this.genres[index].selected = event.target.value;
    const selectedGenres = this.genres.filter(genre => genre.selected).map(genre => genre.id);    
    this.genreSelected.emit(selectedGenres);
   
  }

}
