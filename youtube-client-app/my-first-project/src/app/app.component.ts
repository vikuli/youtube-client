import { Component } from '@angular/core';
import { VideoService } from './core/services/video.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-first-project';

  constructor() {}
}
