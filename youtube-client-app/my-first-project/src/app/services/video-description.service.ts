import { Injectable } from '@angular/core';
import { Video } from '../data/interfaces';
import { data } from '../data/videos-data';

@Injectable({
  providedIn: 'root'
})
export class VideoDescriptionService {

  cards: Video[] = data.items;

  color:string = '';

  constructor() { }

  getVideoByID(id: string): Video {
    return this.cards.find(card => card.id === id) as Video
  }

  cardBorderColor(card: Video) {
    const currentDate: Date = new Date();
    const publicationDate = new Date(card.snippet.publishedAt);
    let dayFromPublication = Math.floor(
      (currentDate.getTime() - publicationDate.getTime()) / 1000 / 60 / 60 / 24
    );
    let monthFromPublication =
      currentDate.getMonth() -
      publicationDate.getMonth() +
      12 * (currentDate.getFullYear() - publicationDate.getFullYear());
    if (dayFromPublication <= 7) this.color = '#2F80ED';
    if (dayFromPublication > 7) {
      if (monthFromPublication <= 1) this.color = '#27AE60';
      if (monthFromPublication > 1 && monthFromPublication <= 6)
        this.color = '#F2C94C';
      if (monthFromPublication > 6) this.color = '#EB5757';
    }
    return this.color;
  }
}
