import { Video } from 'src/app/youtube/data/interfaces';

export function filterVideo(videos: Video[], request: string): Video[] {
  return videos.filter((item) =>
    item.snippet.title.toLowerCase().includes(request.toLowerCase())
  );
}
