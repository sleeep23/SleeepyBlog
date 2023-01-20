// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { NotionToMarkdown } from 'notion-to-md';
import notion from '../../../lib/notion';

const n2m = new NotionToMarkdown({ notionClient: notion });

interface PostInfo {
  md: string;
  query: string;
}

export const getPostData = async (postId: string) => {
  const mdBlocks = await n2m.pageToMarkdown(postId);
  return n2m.toMarkdownString(mdBlocks);
};

export default async function postIdHandler(
  req: NextApiRequest,
  res: NextApiResponse<PostInfo>
) {
  const { postId } = await req.query;
  const post = await getPostData(postId as string);
  res.status(200).send({ md: post, query: postId as string });
}
