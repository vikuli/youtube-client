import { Component } from '@angular/core';
import { VideoService } from 'src/app/services/video.service';
import { sortByDateASC, sortByDateDESC } from 'src/app/utils/sort-by-date';
import { sortByViewASC, sortByViewDESC } from 'src/app/utils/sort-by-view';
import { SortOrder } from 'src/app/utils/sort-order';
import { Video } from '../search-item.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export class SearchItemsComponent {
  color: string = '';

  currentDate: Date = new Date();

  searchResult: Video[] = [];

  constructor(public videoService: VideoService) {}

  showVideos() {
    this.searchResult = this.videoService.cards.filter((card) =>
      card.snippet.title
        .toLowerCase()
        .includes(this.videoService.request.toLowerCase())
    );
    if (this.videoService.sortOrderByDate !== SortOrder.default)
      return this.sortByDate();
    if (this.videoService.sortOrderByView !== SortOrder.default)
      return this.sortByView();
    if (this.videoService.additionalRequest) return this.filterVideo();
    return this.searchResult;
  }

  filterVideo() {
    return this.searchResult.filter((card) =>
      card.snippet.title
        .toLowerCase()
        .includes(this.videoService.additionalRequest.toLowerCase())
    );
  }

  sortByDate() {
    if (this.videoService.sortOrderByDate === SortOrder.ASC) {
      if (this.videoService.additionalRequest)
        this.searchResult = sortByDateASC(this.filterVideo());
      this.searchResult = sortByDateASC(this.searchResult);
    }
    if (this.videoService.sortOrderByDate === SortOrder.DESC) {
      if (this.videoService.additionalRequest)
        this.searchResult = sortByDateDESC(this.filterVideo());
      this.searchResult = sortByDateDESC(this.searchResult);
    }
    return this.searchResult;
  }

  sortByView() {
    if (this.videoService.sortOrderByView === SortOrder.ASC) {
      if (this.videoService.additionalRequest)
        this.searchResult = sortByViewASC(this.filterVideo());
      this.searchResult = sortByViewASC(this.searchResult);
    }
    if (this.videoService.sortOrderByView === SortOrder.DESC) {
      if (this.videoService.additionalRequest)
        this.searchResult = sortByViewDESC(this.filterVideo());
      this.searchResult = sortByViewDESC(this.searchResult);
    }
    return this.searchResult;
  }

  changeBorder(card: Video) {
    const publicationDate = new Date(card.snippet.publishedAt);
    let timeFromPublication = Math.floor(
      (this.currentDate.getTime() - publicationDate.getTime()) /
        1000 /
        60 /
        60 /
        24
    );
    if (timeFromPublication <= 7) this.color = '#2F80ED';
    if (timeFromPublication > 7 && timeFromPublication <= 31)
      this.color = '#27AE60';
    if (timeFromPublication > 31 && timeFromPublication <= 182)
      this.color = '#F2C94C';
    if (timeFromPublication > 182) this.color = '#EB5757';
    return this.color;
  }
}
