import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { CardModule } from 'primeng/card';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { TagModule } from 'primeng/tag';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-person-card',
  imports: [
    CardModule,
    DecimalPipe,
    AvatarModule,
    BadgeModule,
    TagModule,
    TooltipModule,
  ],
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.css'],
})
export class PersonCardComponent {
  @Input() person: any;
  @Input() imageBaseUrl: string = 'https://image.tmdb.org/t/p/w500';
  @Output() cardClick = new EventEmitter<any>();

  get popularityClass():
    | 'success'
    | 'info'
    | 'warn'
    | 'danger'
    | 'secondary'
    | 'contrast' {
    if (!this.person?.popularity) return 'secondary';
    if (this.person.popularity > 20) return 'success';
    if (this.person.popularity > 10) return 'info';
    return 'warn';
  }

  get personName(): string {
    return this.person?.name || 'Unknown';
  }

  onClick(): void {
    this.cardClick.emit(this.person);
  }
}
