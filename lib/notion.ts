import { Client } from '@notionhq/client';
import { NOTION_TOKEN } from '../config';
import {
  BlockObjectResponse,
  ListBlockChildrenResponse,
} from '@notionhq/client/build/src/api-endpoints';

const notion = new Client({
  auth: NOTION_TOKEN,
});
export default notion;

// 아직 쓸일 없음
export const getDatabase = async (databaseId: string) => {
  const response = await notion.databases.query({
    database_id: databaseId,
  });
  return response.results;
};
export const getPage = async (pageId: string) => {
  return await notion.pages.retrieve({ page_id: pageId });
};
export const getBlocks = async (blockId: string) => {
  const blocks = [];
  let cursor;
  while (true) {
    const { results, next_cursor }: ListBlockChildrenResponse =
      await notion.blocks.children.list({
        start_cursor: cursor,
        block_id: blockId,
      });
    blocks.push(...results);
    if (!next_cursor) {
      break;
    }
    cursor = next_cursor;
  }
  return blocks as BlockObjectResponse[];
};
