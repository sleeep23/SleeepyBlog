import type { NextApiRequest, NextApiResponse } from 'next';
import notion from '../../../lib/notion';
import { server } from '../../../config';
import { Databases } from '../notion-db';
import {
  PageObjectResponse,
  PartialPageObjectResponse,
} from '@notionhq/client/build/src/api-endpoints';
import { DbPostContents } from '../../../lib/type';
import { getDatabasePostIds } from '../../../lib/fetchers';

const refinedPost = (data: PageObjectResponse | PartialPageObjectResponse) => {
  const page = data as PageObjectResponse;
  const id = page.id;
  // @ts-ignore
  const title = page.properties.Title.title[0].plain_text as string;
  // @ts-ignore
  const description = page.properties.Description.rich_text[0]
    .plain_text as string;
  // @ts-ignore
  const date = page.properties.Date.date.start as string;
  // @ts-ignore
  const tags = page.properties.Tags.multi_select;
  // @ts-ignore
  const imgLink = page.cover ? (page.cover.external.url as string) : null;

  return { id, title, description, date, tags, imgLink };
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<DbPostContents>>
) {
  const { databases, database_ids } = (await fetch(
    `${server}/api/notion-db`
  ).then((response) => response.json())) as Databases;

  const result = await Promise.all(
    database_ids.map(async (id: string, index: number) => {
      const contents = await getDatabasePostIds(id);
      const dbName = databases[index];
      const posts = contents.map((content) => {
        return refinedPost(content);
      });

      return { name: dbName, posts };
    })
  );
  res.status(200).send(result);
}
