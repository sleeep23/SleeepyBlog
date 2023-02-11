import type { NextApiRequest, NextApiResponse } from 'next';
import notion from '../../../lib/notion';
import { rootNotionPageId } from '../../../config';
import { CollectionMap, ExtendedRecordMap } from 'notion-types';
import { getPageTitle } from 'notion-utils';

export const getDb = async (collection: CollectionMap, key: string) => {
  return await notion.getPage(collection[key].value.parent_id);
};
export const getChildPageIds = async (
  db: ExtendedRecordMap
): Promise<string[] | undefined> => {
  const collectionId = Object.keys(db.collection).at(0);
  const collectionViewId = Object.keys(db.collection_view).at(0);
  if (collectionId && collectionViewId) {
    const collectionData = await notion.getCollectionData(
      collectionId,
      collectionViewId,
      'table'
    );
    //@ts-ignore
    return collectionData.result.reducerResults.collection_group_results
      .blockIds;
  }
};

export const getPageInfo = async (id: string) => {
  const recordMap = await notion.getPage(id);
  const key = (await Object.keys(recordMap.block).at(0)) as string;
  const [title, description, date, tags, imgLink, published] =
    await Promise.all([
      getPageTitle(recordMap),
      recordMap.block[key].value.properties['iJGV'].at(0).at(0),
      recordMap.block[key].value.properties['WS;e'].at(0).at(1).at(0).at(1)
        .start_date,
      recordMap.block[key].value.properties['B|X?'].at(0).at(0).split(','),
      recordMap.block[key].value.format.page_cover,
      !!recordMap.block[key].value.properties['k<e;'],
    ]);
  const result = {
    id,
    title,
    description,
    date,
    tags,
    imgLink,
  };
  if (published) {
    return result;
  }
};

export default async function postHandler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const parentPage = await notion.getPage(rootNotionPageId);
  let posts = {};
  await Promise.all(
    Object.keys(parentPage.collection).map(async (key) => {
      const dbName = parentPage.collection[key].value.name
        .at(0)
        ?.at(0) as string;
      const db = await getDb(parentPage.collection, key);
      const childIds = await getChildPageIds(db);
      if (childIds) {
        const childPageInfos = await Promise.all(
          childIds.map(async (id: string) => {
            return await getPageInfo(id);
          })
        );
        const cntDbPosts = { [dbName]: [...childPageInfos] };
        posts = { ...posts, ...cntDbPosts };
      }
    })
  );
  res.send({ posts });
}
