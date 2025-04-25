import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TmdbService } from '../../tmdb.service';
import { MediaCardComponent } from '../../components/media-card/media-card.component';
import { PersonCardComponent } from '../../components/person-card/person-card.component';

@Component({
  selector: 'app-trending',
  standalone: true,
  imports: [ MediaCardComponent, PersonCardComponent],
  templateUrl: './trending.component.html',
  styleUrl: './trending.component.css',
})
export class TrendingComponent implements OnInit {
  trending: any[] = [];
  imageBaseUrl = 'https://image.tmdb.org/t/p/w500';
  tmdbService = inject(TmdbService);
  router = inject(Router);

  ngOnInit(): void {
    this.tmdbService.getAllTrending().subscribe((data: any) => {
      this.trending = data.results;
    });
  }

  navigateToDetails(item: any): void {
    const type = item.media_type;
    const id = item.id;
    if (type === 'movie') {
      this.router.navigate(['/movie', id]);
    } else if (type === 'tv') {
      this.router.navigate(['/tv', id]);
    } else if (type === 'person') {
      this.router.navigate(['/person', id]);
    }
  }
}
