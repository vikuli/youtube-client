import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Video } from '../search/search-item.model';
import { VideoDescriptionService } from '../services/video-description.service';

@Component({
  selector: 'app-video-description',
  templateUrl: './video-description.component.html',
  styleUrls: ['./video-description.component.scss']
})
export class VideoDescriptionComponent implements OnInit {
  card!: Video;
  constructor(
    private rout: ActivatedRoute,
    public videoDescriptionService: VideoDescriptionService,
    ) { }

  ngOnInit(): void {
    this.rout.params.subscribe((params: Params) => {
      this.card = this.videoDescriptionService.getVideoByID(params['id'])
      console.log(params['id'])
    })
  }

}
