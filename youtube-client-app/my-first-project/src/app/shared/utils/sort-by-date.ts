import { Video } from 'src/app/youtube/data/interfaces';

export function sortByDateASC(videos: Video[]) {
  const sortedVideos: Video[] = videos.sort(
    (a, b) =>
      new Date(b.snippet.publishedAt).getTime() -
      new Date(a.snippet.publishedAt).getTime()
  );
  return sortedVideos;
}

export function sortByDateDESC(videos: Video[]) {
  const sortedVideos: Video[] = videos.sort(
    (a, b) =>
      new Date(a.snippet.publishedAt).getTime() -
      new Date(b.snippet.publishedAt).getTime()
  );
  return sortedVideos;
}
