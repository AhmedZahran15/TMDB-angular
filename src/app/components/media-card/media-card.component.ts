import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { CardModule } from 'primeng/card';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { TagModule } from 'primeng/tag';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-media-card',
  imports: [
    CardModule,
    DatePipe,
    RatingModule,
    FormsModule,
    TagModule,
    TooltipModule,
  ],
  templateUrl: './media-card.component.html',
  styleUrls: ['./media-card.component.css'],
})
export class MediaCardComponent {
  @Input() media: any;
  @Input() imageBaseUrl: string = 'https://image.tmdb.org/t/p/w500';
  @Output() cardClick = new EventEmitter<any>();

  get starRating(): number {
    return this.media?.vote_average
      ? Math.round(this.media.vote_average / 2)
      : 0;
  }
  get title(): string {
    return this.media?.title || this.media?.name || 'Untitled';
  }

  get releaseDate(): Date | null {
    const date = this.media?.release_date || this.media?.first_air_date;
    if (!date) {
      return null;
    }
    return new Date(date);
  }

  get mediaType(): string {
    if (this.media?.title) return 'Movie';
    if (this.media?.name) return 'TV Show';
    return 'Media';
  }

  onClick(): void {
    this.cardClick.emit(this.media);
  }
}
