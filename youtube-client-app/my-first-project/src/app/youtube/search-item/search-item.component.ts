import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VideoDescriptionService } from 'src/app/youtube/services/video-description.service';
import { VideoService } from 'src/app/core/services/video.service';
import { Video } from 'src/app/youtube/data/interfaces';
import { SortOrder } from 'src/app/shared/utils/sort-order';
import { sortByDate } from 'src/app/shared/utils/sort-by-date';
import { sortByView } from 'src/app/shared/utils/sort-by-view';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
  providers: [VideoDescriptionService],
})
export class SearchItemsComponent {
  searchResult: Video[] = [];

  constructor(
    public videoService: VideoService,
    public videoDescriptionService: VideoDescriptionService,
    private router: Router
  ) {}

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
    this.searchResult = sortByDate(
      this.videoService.sortOrderByDate,
      this.filterVideo()
    );
    return this.searchResult;
  }

  sortByView() {
    this.searchResult = sortByView(
      this.videoService.sortOrderByView,
      this.filterVideo()
    );
    return this.searchResult;
  }

  goToDescription(card: Video) {
    this.router.navigate(['/videos', card.id]);
  }
}
