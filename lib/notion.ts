import { NOTION_TOKEN } from '../config';
import { NotionAPI } from 'notion-client';

const notion = new NotionAPI({
  authToken: NOTION_TOKEN,
});
export default notion;
