// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { NotionToMarkdown } from 'notion-to-md';
import notion from '../../../lib/notion';
import { PostContentType } from '../../../lib/type';

const n2m = new NotionToMarkdown({ notionClient: notion });

const getPostImage = async (postId: string) => {
  const page = await notion.pages.retrieve({ page_id: postId });
  // @ts-ignore
  return page.cover.external.url as string;
};
const getPostTitle = async (postId: string) => {
  const page = await notion.pages.retrieve({ page_id: postId });
  // @ts-ignore
  return page.properties.Title.title[0].plain_text;
};
const getPostDate = async (postId: string) => {
  const page = await notion.pages.retrieve({ page_id: postId });
  // @ts-ignore
  return page.properties.Date.date.start;
};
const getPostTags = async (postId: string) => {
  const page = await notion.pages.retrieve({ page_id: postId });
  // @ts-ignore
  return page.properties.Date.date.start;
};
const getPostContent = async (postId: string) => {
  const mdBlocks = await n2m.pageToMarkdown(postId);
  return n2m.toMarkdownString(mdBlocks);
};

export default async function postIdHandler(
  req: NextApiRequest,
  res: NextApiResponse<PostContentType>
) {
  const { postId } = await req.query;
  const postContent = await getPostContent(postId as string);
  const postTitle = await getPostTitle(postId as string);
  const postDate = await getPostDate(postId as string);
  const postImage = await getPostImage(postId as string);
  const postTags = await getPostTags(postId as string);
  res.status(200).send({
    imgLink: postImage,
    content: postContent,
    id: postId as string,
    title: postTitle,
    date: postDate,
    tags: postTags,
  });
}
