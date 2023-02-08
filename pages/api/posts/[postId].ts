import type { NextApiRequest, NextApiResponse } from 'next';
import { PostContentType } from '../../../lib/type';
import {
  getPostContent,
  getPostDate,
  getPostImage,
  getPostTags,
  getPostTitle,
} from '../../../lib/fetchers';

export default async function postIdHandler(
  req: NextApiRequest,
  res: NextApiResponse<PostContentType>
) {
  const { postId } = await req.query;
  const [postContent, postTitle, postDate, postImage, postTags] =
    await Promise.all([
      getPostContent(postId as string),
      getPostTitle(postId as string),
      getPostDate(postId as string),
      getPostImage(postId as string),
      getPostTags(postId as string),
    ]);
  const post = {
    postId,
    postTitle,
    postDate,
    postImage,
    postTags,
    postContent,
  };
  res.status(200).send({
    imgLink: postImage,
    content: postContent,
    id: postId as string,
    title: postTitle,
    date: postDate,
    tags: postTags,
  });
}
