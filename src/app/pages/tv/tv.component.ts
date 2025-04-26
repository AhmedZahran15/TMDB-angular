import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TmdbService } from '../../tmdb.service';
import { MediaCardComponent } from '../../components/media-card/media-card.component';
import { Tv } from '../../interfaces/tv';

@Component({
  selector: 'app-tv',
  imports: [MediaCardComponent],
  templateUrl: './tv.component.html',
  styleUrl: './tv.component.css',
})
export class TvComponent implements OnInit {
  tvShows: Tv[] = [];
  imageBaseUrl = 'https://image.tmdb.org/t/p/w500';
  tmdbService = inject(TmdbService);
  router = inject(Router);
  ngOnInit(): void {
    this.getTvShows();
  }
  getTvShows(): void {
    this.tmdbService.getTrendingTv().subscribe({
      next: (data: any) => {
        this.tvShows = data.results;
      },
      error: (error) => {
        console.error('Error fetching TV shows:', error);
      },
    });
  }
  navigateToDetails(show: Tv): void {
    this.router.navigate(['/tv', show.id]);
  }
}
