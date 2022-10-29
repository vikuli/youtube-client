import { Injectable } from '@angular/core';
import { SortOrder } from 'src/app/shared/utils/sort-order';
import { Video } from '../../youtube/data/interfaces';
import { data } from '../../youtube/data/videos-data';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  cards: Video[] = data.items;

  request: string = '';

  sortOrderByDate: string = SortOrder.default;

  sortOrderByView: string = SortOrder.default;

  additionalRequest: string = '';

  constructor() {
    this.request = this.request;
    this.sortOrderByDate = this.sortOrderByDate;
    this.sortOrderByView = this.sortOrderByView;
    this.additionalRequest = this.additionalRequest;
  }

  getRequest(request: string) {
    this.request = request;
  }

  getSortOrderByDate(sortOrderByDate: string) {
    this.sortOrderByView = SortOrder.default;
    switch (sortOrderByDate) {
      case SortOrder.default:
        this.sortOrderByDate = SortOrder.ASC;
        break;
      case SortOrder.ASC:
        this.sortOrderByDate = SortOrder.DESC;
        break;
      case SortOrder.DESC:
        this.sortOrderByDate = SortOrder.ASC;
        break;
    }
  }

  getSortOrderByView(sortOrderByView: string) {
    this.sortOrderByDate = SortOrder.default;
    switch (sortOrderByView) {
      case SortOrder.default:
        this.sortOrderByView = SortOrder.ASC;
        break;
      case SortOrder.ASC:
        this.sortOrderByView = SortOrder.DESC;
        break;
      case SortOrder.DESC:
        this.sortOrderByView = SortOrder.ASC;
        break;
    }
  }

  getAdditionalRequest(additionalRequest: string) {
    this.additionalRequest = additionalRequest;
  }
}
