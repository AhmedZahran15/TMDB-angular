import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TmdbService } from '../../tmdb.service';
import { MediaCardComponent } from '../../components/media-card/media-card.component';

@Component({
  selector: 'app-tv',
  imports: [MediaCardComponent],
  templateUrl: './tv.component.html',
  styleUrl: './tv.component.css',
})
export class TvComponent implements OnInit {
  tvShows: any[] = [];
  imageBaseUrl = 'https://image.tmdb.org/t/p/w500';
  tmdbService = inject(TmdbService);
  router = inject(Router);
  ngOnInit(): void {
    this.tmdbService.getTrendingTv().subscribe((data: any) => {
      this.tvShows = data.results;
    });
  }

  navigateToDetails(show: any): void {
    this.router.navigate(['/tv', show.id]);
  }
}
