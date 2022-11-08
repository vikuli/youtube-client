import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VideoDescriptionService } from 'src/app/youtube/services/video-description.service';
import { VideoService } from 'src/app/youtube/services/video.service';
import { Video } from 'src/app/youtube/data/interfaces';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
  providers: [VideoDescriptionService],
})
export class SearchItemsComponent {
  constructor(
    public videoService: VideoService,
    public videoDescriptionService: VideoDescriptionService,
    private router: Router
  ) {}

  goToDescription(card: Video) {
    this.router.navigate(['/videos', card.id]);
  }
}
