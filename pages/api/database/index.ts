import type { NextApiRequest, NextApiResponse } from 'next';
import notion from '../../../lib/notion';
import { rootNotionPageId } from '../../../config';
import { BaseDecoration } from 'notion-types';

export interface Databases {
  [name: string]: string;
}

export default async function databaseHandler(
  req: NextApiRequest,
  res: NextApiResponse<{ databases: Databases[] | any }>
) {
  const page = await notion.getPage(rootNotionPageId);
  let databases = {};
  Object.keys(page.collection).map((key) => {
    const name = page.collection[key].value.name.at(0) as BaseDecoration;
    const parentId = page.collection[key].value.parent_id;
    const db = { [name.at(0) as string]: parentId };
    databases = { ...db, ...databases };
  });
  res.send({
    databases,
  });
}
