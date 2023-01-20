// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import notion from '../../../lib/notion';
import { server } from '../../../config';
import { Databases } from '../notion-db';

export interface DbPostIds {
  name: string;
  ids: string[];
}

export async function getDatabasePostIds(dbId: string) {
  const arr: string[] = [];
  await notion.databases
    .query({
      database_id: dbId,
      sorts: [
        { property: 'Date', direction: 'ascending', timestamp: 'created_time' },
      ],
    })
    .then((res) => {
      res.results.map((result) => {
        arr.push(result.id);
      });
    });
  return arr;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { databases, database_ids } = (await fetch(
    `${server}/api/notion-db`
  ).then((response) => response.json())) as Databases;

  const result = await Promise.all(
    database_ids.map(async (id: string, index: number) => {
      const ids = await getDatabasePostIds(id);
      const dbName = databases[index];
      return { name: dbName, ids: ids };
    })
  );
  res.status(200).send(result);
}
