export const NOTION_TOKEN = process.env.NOTION_TOKEN;
export const ARTICLE_DB = process.env.NOTION_ARTICLE_DATABASE_ID;
export const rootNotionPageId = 'a86df9cb1ec744b7a2b8a250811734fa';

const cntEnv = process.env.NEXT_PUBLIC_MODE;
console.log(cntEnv);

const environment = () => {
  switch (cntEnv) {
    case 'production':
      return 'https://notion-sleeep23-blog.vercel.app';
    case 'development':
      return 'http://localhost:3000';
    default:
      return 'https://notion-sleeep23-blog.vercel.app';
  }
};

export const server = environment();
