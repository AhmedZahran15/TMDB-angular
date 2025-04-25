import { Routes } from '@angular/router';
import { TrendingComponent } from './pages/trending/trending.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { TvComponent } from './pages/tv/tv.component';
import { PeopleComponent } from './pages/people/people.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LayoutComponent } from './components/layout/layout.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { TvDetailsComponent } from './pages/tv-details/tv-details.component';
import { PersonDetailsComponent } from './pages/person-details/person-details.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'trending', pathMatch: 'full' },
      { path: 'trending', component: TrendingComponent },
      { path: 'movies', component: MoviesComponent },
      { path: 'tv', component: TvComponent },
      { path: 'people', component: PeopleComponent },
      { path: 'movie/:id', component: MovieDetailsComponent },
      { path: 'tv/:id', component: TvDetailsComponent },
      { path: 'person/:id', component: PersonDetailsComponent },
      { path: '404', component: NotFoundComponent },
    ],
  },
  { path: '**', redirectTo: '/404' },
];
