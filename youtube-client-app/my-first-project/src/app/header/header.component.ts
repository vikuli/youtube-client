import { Component } from '@angular/core';
import { VideoService } from '../services/video.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isShowed: boolean = true;
  activeDate: boolean = false;
  activeView: boolean = false;
  request: string = '';

  constructor(public videoService: VideoService){}

  showSettings() {
    this.isShowed = !this.isShowed;
  }
  activateDate() {
    if (!this.activeDate) this.activeView = false;
    this.activeDate = !this.activeDate;
  }
  activateView() {
    if (!this.activeView) this.activeDate = false;
    this.activeView = !this.activeView;
  }
}
