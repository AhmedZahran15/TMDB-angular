import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TmdbService } from '../../services/tmdb.service';
import { MediaCardComponent } from '../../components/media-card/media-card.component';
import { Movie } from '../../interfaces/movie';

@Component({
  selector: 'app-movies',
  imports: [MediaCardComponent],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css',
})
export class MoviesComponent implements OnInit {
  movies!: Movie[];
  imageBaseUrl = 'https://image.tmdb.org/t/p/w500';
  tmdbService = inject(TmdbService);
  router = inject(Router);
  ngOnInit(): void {
    this.getMovies();
  }
  getMovies() {
    this.tmdbService.getTrendingMovies().subscribe({
      next: (data) => {
        this.movies = data.results;
      },
      error: (error) => {
        console.error('Error fetching movies:', error);
      },
    });
  }
  navigateToDetails(movie: Movie): void {
    this.router.navigate(['/movie', movie.id]);
  }
}
