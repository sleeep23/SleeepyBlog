import { Client } from '@notionhq/client';
import { NOTION_TOKEN } from '../config';

const notion = new Client({
  auth: NOTION_TOKEN,
});
export default notion;
