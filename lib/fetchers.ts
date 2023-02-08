// fetchers
import { rootNotionPageId, server } from '../config';
import axios from 'axios';
import notion, { n2m } from './notion';
import {
  BlockObjectResponse,
  PageObjectResponse,
  PartialBlockObjectResponse,
  PartialPageObjectResponse,
} from '@notionhq/client/build/src/api-endpoints';
const zlib = require('zlib');

export const fetchPosts = async () => {
  const posts = await axios.get(`${server}/api/posts`);
  return posts.data;
};

export const fetchSinglePost = async (id: string) => {
  const post = await axios.get(`${server}/api/posts/${id}`);
  return post.data;
};

export const getPostImage = async (postId: string) => {
  const page = await notion.pages.retrieve({ page_id: postId });
  // @ts-ignore
  return page.cover.external.url as string;
};
export const getPostTitle = async (postId: string) => {
  const page = await notion.pages.retrieve({ page_id: postId });
  // @ts-ignore
  return page.properties.Title.title[0].plain_text;
};
export const getPostDate = async (postId: string) => {
  const page = await notion.pages.retrieve({ page_id: postId });
  // @ts-ignore
  return page.properties.Date.date.start;
};
export const getPostTags = async (postId: string) => {
  const page = await notion.pages.retrieve({ page_id: postId });
  // @ts-ignore
  return page.properties.Date.date.start;
};
export const getPostContent = async (postId: string) => {
  const mdBlocks = await n2m.pageToMarkdown(postId);
  return n2m.toMarkdownString(mdBlocks);
};
export const getDatabasePostIds = async (dbId: string) => {
  const arr: Array<PageObjectResponse | PartialPageObjectResponse> = [];
  await notion.databases
    .query({
      database_id: dbId,
      filter: {
        property: 'Published',
        checkbox: {
          equals: true,
        },
      },
      sorts: [
        {
          property: 'Date',
          direction: 'descending',
          timestamp: 'created_time',
        },
      ],
    })
    .then((res) => {
      res.results.map(
        (result: PageObjectResponse | PartialPageObjectResponse) => {
          arr.push(result);
        }
      );
    });
  return arr;
};

// Functions for getStaticPath
export const getAllDatabaseIDs = async () => {
  let databaseIDs: string[] = [];
  const rootBlockChildren = await notion.blocks.children.list({
    block_id: rootNotionPageId,
  });
  rootBlockChildren.results.map(
    (database: BlockObjectResponse | PartialBlockObjectResponse) => {
      const DB = database as BlockObjectResponse;
      if (DB.type === 'child_database') {
        databaseIDs.push(DB.id);
      }
    }
  );
  return databaseIDs;
};
export const getAllPostIDs = async () => {
  const databaseIDs = await getAllDatabaseIDs();
  let postIDs: string[] = [];
  databaseIDs.map(async (databaseID) => {
    const posts = await getDatabasePostIds(databaseID);
    posts.map((post: PageObjectResponse | PartialPageObjectResponse) => {
      const page = post as PageObjectResponse;
      const id = page.id;
      postIDs.push(id);
    });
  });
  return postIDs;
};

export const fetchSingleStaticPost = async (id: string) => {
  const postContent = await getPostContent(id);
  const postTitle = await getPostTitle(id);
  const postDate = await getPostDate(id);
  const postImage = await getPostImage(id);
  const postTags = await getPostTags(id);
  return {
    imgLink: postImage,
    content: postContent,
    id: id as string,
    title: postTitle,
    date: postDate,
    tags: postTags,
  };
};
