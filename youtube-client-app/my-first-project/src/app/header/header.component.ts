import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isShowed: boolean = true;
  activeDate: boolean = false;
  activeView: boolean = false;
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
