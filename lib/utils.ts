import { PostThumbnailType } from './type';

export const getPostsAlignedWithDate = (posts: PostThumbnailType[]) => {
  return posts.sort(
    (a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf()
  );
};
