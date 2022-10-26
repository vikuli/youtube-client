import { Video } from 'src/app/youtube/data/interfaces';

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
