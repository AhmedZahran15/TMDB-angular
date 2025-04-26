import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe, DecimalPipe, Location } from '@angular/common';
import { TmdbService } from '../../tmdb.service';
import { CardModule } from 'primeng/card';
import { TabViewModule } from 'primeng/tabview';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { PersonDetails } from '../../interfaces/person-details';

@Component({
  selector: 'app-person-details',
  imports: [
    CardModule,
    TabViewModule,
    ButtonModule,
    TagModule,
    DecimalPipe,
    DatePipe,
  ],
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css'],
})
export class PersonDetailsComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private tmdbService = inject(TmdbService);
  private location = inject(Location);

  id: number = 0;
  person!: PersonDetails;
  loading: boolean = true;
  error: string | null = null;
  imageBaseUrl = 'https://image.tmdb.org/t/p/w500';

  ngOnInit(): void {
    this.getPersonDetails();
  }
  getPersonDetails(): void {
    this.route.params.subscribe((params) => {
      this.id = +params['id'];
      this.loadPersonDetails();
    });
  }
  loadPersonDetails(): void {
    this.loading = true;
    this.error = null;

    this.tmdbService.getPersonDetails(this.id).subscribe({
      next: (data) => {
        this.person = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load person details';
        this.loading = false;
        console.error(err);
      },
    });
  }

  goBack(): void {
    this.location.back();
  }
}
