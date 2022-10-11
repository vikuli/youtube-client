import { Component } from '@angular/core';
import { VideoService } from '../services/video.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent {
  isShowed: boolean = true;

  request: string = '';

  upDownDate: string = '';

  upDownView: string = '';

  additionalRequest: string = '';

  constructor(public videoService: VideoService) {}

  consol(searchInResults: string) {
    console.log('search ' + searchInResults);
  }

  showSettings() {
    this.isShowed = !this.isShowed;
  }

  activateDate(upDownDate: string) {
    this.upDownView = '';
    if (!upDownDate) this.upDownDate = '↓';
    if (upDownDate === '↓') this.upDownDate = '↑';
    if (upDownDate === '↑') this.upDownDate = '↓';
  }

  activateView(upDownView: string) {
    this.upDownDate = '';
    if (!upDownView) this.upDownView = '↓';
    if (upDownView === '↓') this.upDownView = '↑';
    if (upDownView === '↑') this.upDownView = '↓';
  }
}
