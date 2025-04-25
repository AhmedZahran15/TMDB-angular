import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TmdbService } from '../../tmdb.service';
import { MediaCardComponent } from '../../components/media-card/media-card.component';

@Component({
  selector: 'app-movies',
  imports: [MediaCardComponent],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css',
})
export class MoviesComponent implements OnInit {
  movies: any[] = [];
  imageBaseUrl = 'https://image.tmdb.org/t/p/w500';
  tmdbService = inject(TmdbService);
  router = inject(Router);
  ngOnInit(): void {
    this.tmdbService.getTrendingMovies().subscribe((data: any) => {
      this.movies = data.results;
    });
  }

  navigateToDetails(movie: any): void {
    this.router.navigate(['/movie', movie.id]);
  }
}
