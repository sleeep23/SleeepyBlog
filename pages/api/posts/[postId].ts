// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { NotionToMarkdown } from 'notion-to-md';
import notion from '../../../lib/notion';
import { PostContentType } from '../../../lib/type';

const n2m = new NotionToMarkdown({ notionClient: notion });

export const getPostData = async (postId: string) => {
  const mdBlocks = await n2m.pageToMarkdown(postId);
  return n2m.toMarkdownString(mdBlocks);
};

export default async function postIdHandler(
  req: NextApiRequest,
  res: NextApiResponse<PostContentType>
) {
  const { postId } = await req.query;
  const post = await getPostData(postId as string);
  res.status(200).send({ content: post, id: postId as string });
}
