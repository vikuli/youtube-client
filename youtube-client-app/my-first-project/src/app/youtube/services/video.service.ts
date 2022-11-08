import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { filterVideo } from 'src/app/shared/utils/filter-video';
import { sortByDate } from 'src/app/shared/utils/sort-by-date';
import { sortByView } from 'src/app/shared/utils/sort-by-view';
import { SortOrder } from 'src/app/shared/utils/sort-order';
import { YoutubeService } from 'src/app/youtube/services/youtube.service';
import { Id, Video } from '../data/interfaces';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  request: string = '';
  sortOrderByDate: string = SortOrder.default;
  sortOrderByView: string = SortOrder.default;
  additionalRequest: string = '';
  searchResult: Video[] = [];
  filteredSearchResult: Video[] = [];
  loading: boolean = false;

  constructor(private router: Router, public youtubeService: YoutubeService) {}

  getRequest(request: string) {
    this.request = request;
  }

  displayVideos() {
    this.loading = true;
    let videosID: string[] | string = [];
    if (this.request.trim() && this.request.length > 2) {
      this.youtubeService
        .fetchVideos(this.request)
        .pipe(map((el) => el.items))
        .subscribe((videos) => {
          console.log(videos);
          videos.forEach((el) =>
            (videosID as string[]).push((el.id as Id).videoId)
          );
          videosID = (videosID as string[]).join(',');

          this.youtubeService
            .displayVideos(videosID)
            .pipe(map((el) => el.items))
            .subscribe((videos) => {
              this.searchResult = videos;
              if (!this.additionalRequest) {
                this.filteredSearchResult = this.searchResult;
              } else {
                this.filteredSearchResult = filterVideo(
                  this.searchResult,
                  this.additionalRequest
                );
              }
              this.loading = false;
            });
        });
      this.router.navigate(['/videos']);
    }
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

  filterVideo(additionalRequest: string) {
    this.additionalRequest = additionalRequest;
    this.filteredSearchResult = filterVideo(
      this.searchResult,
      additionalRequest
    );
  }

  sortVideoByDate() {
    if (this.sortOrderByDate !== SortOrder.default) {
      this.filteredSearchResult = sortByDate(
        this.sortOrderByDate,
        this.filteredSearchResult
      );
    }
  }

  sortVideoByView() {
    if (this.sortOrderByView !== SortOrder.default) {
      this.filteredSearchResult = sortByView(
        this.sortOrderByView,
        this.filteredSearchResult
      );
    }
  }
}
