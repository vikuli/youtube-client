import { Injectable } from '@angular/core';
import { Video } from '../search/search-item.model';
import { data } from '../search/search-response.model';

@Injectable({
  providedIn: 'root',
})

export class VideoService {
  cards: Video[] = data.items;

  request: string = '';

  upDownView: string = '';

  upDownDate: string = '';

  additionalRequest: string = '';

  get getRequest() {
    return this.request;
  }

  get getUpDownDate() {
    return this.upDownDate;
  }

  get getUpDownView() {
    return this.upDownView;
  }

  get getAdditionalRequest() {
    return this.additionalRequest;
  }

  showVideos(request: string) {
    this.request = request;
    return this.cards;
  }

  sortByDate(upDownDate: string) {
    this.upDownView = '';
    if (!upDownDate) this.upDownDate = '↓';
    if (upDownDate === '↓') this.upDownDate = '↑';
    if (upDownDate === '↑') this.upDownDate = '↓';
    return this.cards;
  }

  sortByView(upDownView: string) {
    this.upDownDate = '';
    if (!upDownView) this.upDownView = '↓';
    if (upDownView === '↓') this.upDownView = '↑';
    if (upDownView === '↑') this.upDownView = '↓';
    return this.cards;
  }

  filterVideo(additionalRequest: string) {
    this.additionalRequest = additionalRequest;
    return this.cards;
  }
}
