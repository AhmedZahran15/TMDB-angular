import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatePipe, DecimalPipe, Location } from '@angular/common';
import { TmdbService } from '../../tmdb.service';
import { CardModule } from 'primeng/card';
import { TabViewModule } from 'primeng/tabview';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { MovieDetails } from '../../interfaces/movie-details';

@Component({
  selector: 'app-movie-details',
  imports: [CardModule, TabViewModule, ButtonModule, TagModule, DecimalPipe,DatePipe],
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private tmdbService = inject(TmdbService);
  private location = inject(Location);

  id: number = 0;
  movie!: MovieDetails;
  loading: boolean = true;
  error: string | null = null;
  imageBaseUrl = 'https://image.tmdb.org/t/p/w500';

  ngOnInit(): void {
    this.getData();
  }
  getData(): void {
    this.route.params.subscribe((params) => {
      this.id = +params['id'];
      this.loadMovieDetails();
    });
  }

  loadMovieDetails(): void {
    this.loading = true;
    this.error = null;
    this.tmdbService.getMovieDetails(this.id).subscribe({
      next: (data) => {
        this.movie = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load movie details';
        this.loading = false;
        console.error(err);
      },
    });
  }

  goBack(): void {
    this.location.back();
  }
}
