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
    if (sortOrderByDate === SortOrder.default)
      this.sortOrderByDate = SortOrder.ASC;
    if (sortOrderByDate === SortOrder.ASC)
      this.sortOrderByDate = SortOrder.DESC;
    if (sortOrderByDate === SortOrder.DESC)
      this.sortOrderByDate = SortOrder.ASC;
  }

  getSortOrderByView(sortOrderByView: string) {
    this.sortOrderByDate = SortOrder.default;
    if (sortOrderByView === SortOrder.default)
      this.sortOrderByView = SortOrder.ASC;
    if (sortOrderByView === SortOrder.ASC)
      this.sortOrderByView = SortOrder.DESC;
    if (sortOrderByView === SortOrder.DESC)
      this.sortOrderByView = SortOrder.ASC;
  }

  getAdditionalRequest(additionalRequest: string) {
    this.additionalRequest = additionalRequest;
  }
}
