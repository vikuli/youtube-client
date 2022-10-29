import { Component } from '@angular/core';
import { SortOrder } from 'src/app/shared/utils/sort-order';
import {
  sortingSymbolASC,
  sortingSymbolDESC,
} from 'src/app/shared/utils/special-characters';
import { AuthService } from '../services/auth.service';
import { VideoService } from '../services/video.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isShowed: boolean = true;

  request: string = '';

  sortOrderByDate: string = SortOrder.default;

  sortOrderByView: string = SortOrder.default;

  arrowForDate: string = '';

  arrowForView: string = '';

  additionalRequest: string = '';

  constructor(
    public videoService: VideoService,
    public authService: AuthService
  ) {}

  changeSettingsVisibility() {
    this.isShowed = !this.isShowed;
  }

  updateSortOrderByDate(sortOrderByDate: string) {
    this.sortOrderByView = SortOrder.default;
    if (sortOrderByDate === SortOrder.default)
      this.sortOrderByDate = SortOrder.ASC;
    if (sortOrderByDate === SortOrder.ASC)
      this.sortOrderByDate = SortOrder.DESC;
    if (sortOrderByDate === SortOrder.DESC)
      this.sortOrderByDate = SortOrder.ASC;
  }

  updateSortOrderByView(sortOrderByView: string) {
    this.sortOrderByDate = SortOrder.default;
    if (sortOrderByView === SortOrder.default)
      this.sortOrderByView = SortOrder.ASC;
    if (sortOrderByView === SortOrder.ASC)
      this.sortOrderByView = SortOrder.DESC;
    if (sortOrderByView === SortOrder.DESC)
      this.sortOrderByView = SortOrder.ASC;
  }

  updateArrowForDate(sortOrderByDate: string) {
    this.arrowForView = '';
    if (sortOrderByDate === SortOrder.ASC)
      this.arrowForDate = sortingSymbolASC;
    if (sortOrderByDate === SortOrder.DESC)
      this.arrowForDate = sortingSymbolDESC;
  }

  updateArrowForView(sortOrderByView: string) {
    this.arrowForDate = '';
    if (sortOrderByView === SortOrder.ASC)
      this.arrowForView = sortingSymbolASC;
    if (sortOrderByView === SortOrder.DESC)
      this.arrowForView = sortingSymbolDESC;
  }
}
