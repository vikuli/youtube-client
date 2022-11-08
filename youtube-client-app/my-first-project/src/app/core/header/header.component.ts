import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { SortOrder } from 'src/app/shared/utils/sort-order';
import {
  sortingSymbolASC,
  sortingSymbolDESC,
} from 'src/app/shared/utils/special-characters';
import { AuthService } from '../services/auth.service';
import { VideoService } from '../../youtube/services/video.service';
import { debounceTime, fromEvent } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements AfterViewInit {
  isShowed: boolean = true;

  request: string = '';

  sortOrderByDate: string = SortOrder.default;

  sortOrderByView: string = SortOrder.default;

  arrowForDate: string = '';

  arrowForView: string = '';

  additionalRequest: string = '';

  @ViewChild('searchInput') searchInput!: ElementRef;

  constructor(
    public videoService: VideoService,
    public authService: AuthService,
  ) {}

  ngAfterViewInit(): void {
    fromEvent(this.searchInput.nativeElement, 'input')
      .pipe(debounceTime(1500))
      .subscribe(() => {
        this.videoService.displayVideos();
      });
  }

  changeSettingsVisibility() {
    this.isShowed = !this.isShowed;
  }

  updateSortOrderByDate(sortOrderByDate: string) {
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

  updateSortOrderByView(sortOrderByView: string) {
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

  updateArrowForDate(sortOrderByDate: string) {
    this.arrowForView = '';
    switch (sortOrderByDate) {
      case SortOrder.ASC:
        this.arrowForDate = sortingSymbolASC;
        break;
      case SortOrder.DESC:
        this.arrowForDate = sortingSymbolDESC;
        break;
    }
  }

  updateArrowForView(sortOrderByView: string) {
    this.arrowForDate = '';
    switch (sortOrderByView) {
      case SortOrder.ASC:
        this.arrowForView = sortingSymbolASC;
        break;
      case SortOrder.DESC:
        this.arrowForView = sortingSymbolDESC;
        break;
    }
  }
}
