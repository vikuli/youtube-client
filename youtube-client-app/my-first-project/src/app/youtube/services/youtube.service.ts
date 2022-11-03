import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiKey, apiKey2 } from '../data/api/api-key';
import { Data } from '../data/interfaces';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  constructor(private http: HttpClient) {}

  fetchVideos(request: string): Observable<Data> {
    return this.http.get<Data>(
      `https://www.googleapis.com/youtube/v3/search?key=${apiKey2}&type=video&part=snippet&maxResults=15&q=${request}`
    );
  }

  displayVideos(videosID: string): Observable<Data> {
    return this.http.get<Data>(
      `https://www.googleapis.com/youtube/v3/videos?key=${apiKey2}&id=${videosID}&part=snippet,statistics`
    );
  }
}
