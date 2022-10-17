import { Component } from '@angular/core';
import { VideoService } from 'src/app/services/video.service';
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

  request() {
    return this.videoService.getRequest;
  }

  upDownDate() {
    return this.videoService.getUpDownDate;
  }

  upDownView() {
    return this.videoService.getUpDownView;
  }

  additionalRequest() {
    return this.videoService.getAdditionalRequest;
  }

  showVideos() {
    this.searchResult = this.videoService.cards.filter((card) =>
      card.snippet.title.toLowerCase().includes(this.request().toLowerCase()),
    );
    if (this.upDownDate()) return this.sortByDate();
    if (this.upDownView()) return this.sortByView();
    if (this.additionalRequest()) return this.filterVideo();
    return this.searchResult;
  }

  sortByDate() {
    if (this.upDownDate() === '↓') {
      if (this.additionalRequest()) {
        this.searchResult = this.filterVideo().sort(
          (a, b) =>
            new Date(a.snippet.publishedAt).getTime() -
            new Date(b.snippet.publishedAt).getTime(),
        );
      } else {
        this.searchResult = this.searchResult.sort(
          (a, b) =>
            new Date(a.snippet.publishedAt).getTime() -
            new Date(b.snippet.publishedAt).getTime(),
        );
      }
    }
    if (this.upDownDate() === '↑') {
      if (this.additionalRequest()) {
        this.searchResult = this.filterVideo().sort(
          (a, b) =>
            new Date(b.snippet.publishedAt).getTime() -
            new Date(a.snippet.publishedAt).getTime(),
        );
      } else {
        this.searchResult = this.searchResult.sort(
          (a, b) =>
            new Date(b.snippet.publishedAt).getTime() -
            new Date(a.snippet.publishedAt).getTime(),
        );
      }
    }
    return this.searchResult;
  }

  sortByView() {
    if (this.upDownView() === '↓') {
      if (this.additionalRequest()) {
        this.searchResult = this.filterVideo().sort(
          (a, b) => Number(a.statistics.viewCount) - Number(b.statistics.viewCount),
        );
      } else {
        this.searchResult = this.searchResult.sort(
          (a, b) => Number(a.statistics.viewCount) - Number(b.statistics.viewCount),
        );
      }
    }
    if (this.upDownView() === '↑') {
      if (this.additionalRequest()) {
        this.searchResult = this.filterVideo().sort(
          (a, b) => Number(b.statistics.viewCount) - Number(a.statistics.viewCount),
        );
      } else {
        this.searchResult = this.searchResult.sort(
          (a, b) => Number(b.statistics.viewCount) - Number(a.statistics.viewCount),
        );
      }
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
        24,
    );
    if (timeFromPublication <= 7) this.color = '#2F80ED';
    if (timeFromPublication > 7 && timeFromPublication <= 31)
      this.color = '#27AE60';
    if (timeFromPublication > 31 && timeFromPublication <= 182)
      this.color = '#F2C94C';
    if (timeFromPublication > 182) this.color = '#EB5757';
    return this.color;
  }

  filterVideo() {
    return this.searchResult.filter((card) =>
      card.snippet.title
        .toLowerCase()
        .includes(this.additionalRequest().toLowerCase()),
    );
  }
}
