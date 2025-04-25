import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TmdbService } from '../../tmdb.service';
import { PersonCardComponent } from '../../components/person-card/person-card.component';

@Component({
  selector: 'app-people',
  standalone: true,
  imports: [PersonCardComponent],
  templateUrl: './people.component.html',
  styleUrl: './people.component.css',
})
export class PeopleComponent implements OnInit {
  people: any[] = [];
  imageBaseUrl = 'https://image.tmdb.org/t/p/w500';
  tmdbService = inject(TmdbService);
  router = inject(Router);
  ngOnInit(): void {
    this.tmdbService.getTrendingPeople().subscribe((data: any) => {
      this.people = data.results;
    });
  }

  navigateToDetails(person: any): void {
    this.router.navigate(['/person', person.id]);
  }
}
