import { Video } from '../search/search-item.model';
//import { data } from '../search/search-response.model';

export function sortByViewASC(videos: Video[]) {
  //const videos: Video[] = data.items;
  const sortedVideos: Video[] = videos.sort(
    (a, b) => Number(a.statistics.viewCount) - Number(b.statistics.viewCount)
  );
  return sortedVideos;
}

export function sortByViewDESC(videos: Video[]) {
  //const videos: Video[] = data.items;
  const sortedVideos: Video[] = videos.sort(
    (a, b) => Number(b.statistics.viewCount) - Number(a.statistics.viewCount)
  );
  return sortedVideos;
}
