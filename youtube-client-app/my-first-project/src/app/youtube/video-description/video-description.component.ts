import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Video } from '../data/interfaces';
import { VideoDescriptionService } from '../services/video-description.service';

@Component({
  selector: 'app-video-description',
  templateUrl: './video-description.component.html',
  styleUrls: ['./video-description.component.scss'],
  providers: [VideoDescriptionService],
})
export class VideoDescriptionComponent implements OnInit {
  card!: Video;

  constructor(
    private rout: ActivatedRoute,
    public videoDescriptionService: VideoDescriptionService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.rout.params.subscribe((params: Params) => {
      if (this.videoDescriptionService.getVideoByID(params.id)) {
        this.card = this.videoDescriptionService.getVideoByID(
          params.id,
        ) as Video;
      } else {
        this.router.navigate(['/error']);
      }
    });
  }
}
