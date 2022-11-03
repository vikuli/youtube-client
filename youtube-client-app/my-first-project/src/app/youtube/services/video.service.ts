import { Injectable } from '@angular/core';
import { SortOrder } from 'src/app/shared/utils/sort-order';
import { YoutubeService } from 'src/app/youtube/services/youtube.service';
import { Id, Video } from '../data/interfaces';
import { data } from '../data/videos-data';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  cards: Video[] = data.items;
  request: string = '';
  sortOrderByDate: string = SortOrder.default;
  sortOrderByView: string = SortOrder.default;
  additionalRequest: string = '';
  searchResult: Video[] = [];
  loading: boolean = false;

  constructor(public youtubeService: YoutubeService) {}

  getRequest(request: string) {
    this.request = request;
  }

  displayVideos() {
    this.loading = true;
    let videosID: string[] | string = [];
    this.youtubeService.fetchVideos(this.request).subscribe((videos) => {
      videos.items.forEach((el) =>
        (videosID as string[]).push((el.id as Id).videoId)
      );
      videosID = (videosID as string[]).join(',');
      this.youtubeService.displayVideos(videosID).subscribe((videos) => {
        this.searchResult = videos.items;
        this.loading = false;
      });
    });
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
