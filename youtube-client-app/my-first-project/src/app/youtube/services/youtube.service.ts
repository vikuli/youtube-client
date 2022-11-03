import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VideoService } from 'src/app/core/services/video.service';
import { apiKey } from '../data/api/api-key';
import { Data, Id, Video } from '../data/interfaces';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  video: Video[] = [];

  constructor(private http: HttpClient, public videoService: VideoService) {}

  fetchVideos() {
    let videosID: string[] | string = [];
    this.http
      .get<Data>(
        `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&type=video&part=snippet&maxResults=15&q=${this.videoService.request}`
      )
      .subscribe((videos) => {
        videos.items.forEach((el) =>
          (videosID as string[]).push((el.id as Id).videoId)
        );
        videosID = (videosID as string[]).join(',');
        this.http.get<Data>(
          `https://www.googleapis.com/youtube/v3/videos?key=${apiKey}&id=${videosID}&part=snippet,statistics`
        );
      });
  }
}
