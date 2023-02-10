import type { NextApiRequest, NextApiResponse } from 'next';
import notion from '../../../lib/notion';

export interface Databases {
  post_ids: string[];
}

export default async function notionDBHandler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { dbId } = await req.query;
  const page = await notion.getPage(dbId as string);
  const collectionId = Object.keys(page.collection).at(0);
  const collectionViewId = Object.keys(page.collection_view).at(0);
  if (collectionId && collectionViewId) {
    const ids = await notion.getCollectionData(
      collectionId,
      collectionViewId,
      'table'
    );
    // @ts-ignore
    const db_ids = ids.result.reducerResults.collection_group_results.blockIds;
    const db_name = page.collection[collectionId].value.name
      .at(0)
      ?.at(0) as string;
    res.send({ name: db_name, postIds: db_ids });
  }
}
