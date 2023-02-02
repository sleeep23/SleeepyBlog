import type { NextApiRequest, NextApiResponse } from 'next';
import {
  BlockObjectResponse,
  PartialBlockObjectResponse,
} from '@notionhq/client/build/src/api-endpoints';
import { rootNotionPageId } from '../../../config';
import notion from '../../../lib/notion';

export interface Databases {
  databases: string[];
  database_ids: string[];
}

export default async function notionDBHandler(
  req: NextApiRequest,
  res: NextApiResponse<Databases>
) {
  let names: string[] = [];
  let ids: string[] = [];

  const rootBlockChildren = await notion.blocks.children.list({
    block_id: rootNotionPageId,
  });

  rootBlockChildren.results.map(
    (database: BlockObjectResponse | PartialBlockObjectResponse) => {
      const DB = database as BlockObjectResponse;
      if (DB.type === 'child_database') {
        ids.push(DB.id);
        names.push(DB.child_database.title);
      }
    }
  );

  res.status(200).send({ databases: names, database_ids: ids });
}
