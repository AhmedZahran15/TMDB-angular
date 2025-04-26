import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatePipe, DecimalPipe, Location } from '@angular/common';
import { TmdbService } from '../../tmdb.service';
import { CardModule } from 'primeng/card';
import { TabViewModule } from 'primeng/tabview';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { TvDetails } from '../../interfaces/tv-details';

@Component({
  selector: 'app-tv-details',
  imports: [
    CardModule,
    TabViewModule,
    ButtonModule,
    TagModule,
    DecimalPipe,
    DatePipe,
  ],
  templateUrl: './tv-details.component.html',
  styleUrls: ['./tv-details.component.css'],
})
export class TvDetailsComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private tmdbService = inject(TmdbService);
  private location = inject(Location);

  id: number = 0;
  tvShow!: TvDetails;
  loading: boolean = true;
  error: string | null = null;
  imageBaseUrl = 'https://image.tmdb.org/t/p/w500';

  ngOnInit(): void {
    this.getTvDetails();
  }
  getTvDetails(): void {
    this.route.params.subscribe((params) => {
      this.id = +params['id'];
      this.loadTvDetails();
    });
  }
  loadTvDetails(): void {
    this.loading = true;
    this.error = null;

    this.tmdbService.getTvDetails(this.id).subscribe({
      next: (data) => {
        this.tvShow = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load TV show details';
        this.loading = false;
        console.error(err);
      },
    });
  }

  goBack(): void {
    this.location.back();
  }
}
