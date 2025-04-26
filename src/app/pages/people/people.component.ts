import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TmdbService } from '../../tmdb.service';
import { PersonCardComponent } from '../../components/person-card/person-card.component';
import { Person } from '../../interfaces/person';

@Component({
  selector: 'app-people',
  imports: [PersonCardComponent],
  templateUrl: './people.component.html',
  styleUrl: './people.component.css',
})
export class PeopleComponent implements OnInit {
  people: Person[] = [];
  imageBaseUrl = 'https://image.tmdb.org/t/p/w500';
  tmdbService = inject(TmdbService);
  router = inject(Router);
  ngOnInit(): void {
    this.getPeople();
  }
  getPeople(): void {
    this.tmdbService.getTrendingPeople().subscribe({
      next: (data: any) => {
        this.people = data.results;
      },
      error: (error) => {
        console.error('Error fetching people:', error);
      },
    });
  }
  navigateToDetails(person: Person): void {
    this.router.navigate(['/person', person.id]);
  }
}
