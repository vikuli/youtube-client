import { Video } from 'src/app/youtube/data/interfaces';
import { SortOrder } from './sort-order';

export function sortByViewASC(videos: Video[]) {
  const sortedVideos: Video[] = videos.sort(
    (a, b) => Number(a.statistics.viewCount) - Number(b.statistics.viewCount),
  );
  return sortedVideos;
}

export function sortByViewDESC(videos: Video[]) {
  const sortedVideos: Video[] = videos.sort(
    (a, b) => Number(b.statistics.viewCount) - Number(a.statistics.viewCount),
  );
  return sortedVideos;
}

export function sortByView(sortOrder: string, videos: Video[]) {
  if (sortOrder === SortOrder.ASC) {
    videos = sortByViewASC(videos);
  }
  if (sortOrder === SortOrder.DESC) {
    videos = sortByViewDESC(videos);
  }
  return videos;
}
