import { Injectable } from '@angular/core';
import { Video } from '../search/search-item.model';
import { data } from '../search/search-response.model';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  cards: Video[] = data.items;
  searchResult: Video[] = [];
  request: string = '';

  constructor() {}

  get getRequest() {
    return this.request;
  }

  showVideos(request: string) {
    this.request = request;
    this.searchResult = this.cards.filter((card) =>
      card.snippet.title.toLowerCase().includes(this.request.toLowerCase())
    );
    return this.searchResult;
  }
}
