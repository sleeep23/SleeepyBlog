export const NOTION_TOKEN = process.env.NOTION_TOKEN;
export const ARTICLE_DB = process.env.NOTION_ARTICLE_DATABASE_ID;
export const rootNotionPageId = 'a86df9cb1ec744b7a2b8a250811734fa';

const cntEnv = process.env.NEXT_PUBLIC_MODE;

const isProduction = () => {
  return cntEnv === 'production';
};

export const server = isProduction()
  ? 'https://sleeepy-blog.vercel.app'
  : 'http://localhost:3000';
