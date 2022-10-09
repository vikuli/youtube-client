import { Component } from '@angular/core';
import { Video } from '../search-item.model';
import { data } from '../search-response.model';

@Component({
  selector: '<app-search-item></app-search-item>',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})

export class SearchItemsComponent {
  cards: Video[] = data.items;
  color: string = '';
  currentDate: Date = new Date();
  changeBorder(card: Video) {
    const publicationDate = new Date(card.snippet.publishedAt);
    let timeFromPublication = Math.floor((this.currentDate.getTime() - publicationDate.getTime()) / 1000 / 60 / 60 / 24);
    if (timeFromPublication <= 7) this.color = '#2F80ED';
    if (timeFromPublication > 7 && timeFromPublication <= 31) this.color = '#27AE60';
    if (timeFromPublication > 31 && timeFromPublication <= 182) this.color = '#F2C94C';
    if (timeFromPublication > 182 ) this.color = '#EB5757';
    return this.color;
  }
}
