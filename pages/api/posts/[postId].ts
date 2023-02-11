import type { NextApiRequest, NextApiResponse } from 'next';
import notion from '../../../lib/notion';
import { getPageTitle } from 'notion-utils';

export default async function postIdHandler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const id = (await req.query.postId) as string;
  const recordMap = await notion.getPage(id);
  const thumbnailId = Object.keys(recordMap.block).at(0);

  const title = getPageTitle(recordMap);
  const description = recordMap.block[thumbnailId as string].value.properties[
    'iJGV'
  ]
    .at(0)
    .at(0);
  const date = recordMap.block[thumbnailId as string].value.properties['WS;e']
    .at(0)
    .at(1)
    .at(0)
    .at(1).start_date;

  const tags: string = recordMap.block[thumbnailId as string].value.properties[
    'B|X?'
  ]
    .at(0)
    .at(0)
    .split(',');
  const imgLink =
    recordMap.block[thumbnailId as string].value.format.page_cover;
  const published =
    !!recordMap.block[thumbnailId as string].value.properties['k<e;'];
  res.send({
    id,
    title,
    description,
    date,
    tags,
    imgLink,
    published,
  });
}
