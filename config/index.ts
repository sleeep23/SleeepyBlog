import * as process from 'process';
export const NOTION_TOKEN = process.env.NOTION_TOKEN_V2;
export const ARTICLE_DB = process.env.NOTION_ARTICLE_DATABASE_ID;
export const rootNotionPageId = 'a86df9cb1ec744b7a2b8a250811734fa';
export const server =
  process.env.NEXT_PUBLIC_MODE === 'production'
    ? 'https://sleeepy-blog.vercel.app'
    : 'http://localhost:3000';
