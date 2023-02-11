import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ArticleLayout from '../../components/layout/articleLayout';
import PostsMenu from '../../components/PostsMenu';
import { server } from '../../config';
import { useQuery } from '@tanstack/react-query';
import Posts from '../../components/Posts';
import { useRouter } from 'next/router';
import { PostThumbnailType } from '../../lib/type';

export const getDatabaseId = async (selectedMenu: string): Promise<string> => {
  const dbs = await axios.get(`${server}/api/database`);
  return dbs.data.databases[selectedMenu];
};

export const getItemIdsInDatabaseId = async (id: string): Promise<string[]> => {
  const posts = await axios.get(`${server}/api/database/${id}`);
  return posts.data.postIds;
};

export const getDatabaseItemIds = async (selectedDatabases: string) => {
  if (selectedDatabases === 'All') {
    let posts: string[] = [];
    const databases = ['Projects', 'Development'];
    await Promise.all(
      databases.map(async (db) => {
        const db_id = await getDatabaseId(db);
        await console.log(db_id);
        const items = await getItemIdsInDatabaseId(db_id);
        await console.log(items);
        posts = [...posts, ...items];
      })
    );
    console.log(posts);
    return posts;
  } else {
    const db_id = await getDatabaseId(selectedDatabases);
    return await getItemIdsInDatabaseId(db_id);
  }
};

export default function Index() {
  const router = useRouter();
  const { menu } = router.query;
  const [dbNames, setDbNames] = useState(['']);
  const [cntMenu, setCntMenu] = useState<string>('All');
  const queryTime = 1000 * 60 * 5;
  const queryFn = async () => {
    const ids = await getDatabaseItemIds(cntMenu);
    let posts: PostThumbnailType[] = [];
    ids.map(async (id: string) => {
      const post = await axios.get(`${server}/api/posts/${id}`);
      posts.push(post.data);
    });
    return posts;
  };
  const {
    data: posts,
    isLoading,
    isError,
    isSuccess,
  } = useQuery(['posts'], queryFn, {
    staleTime: queryTime,
  });
  useEffect(() => {
    const getDatabaseNames = async () => {
      const names = await axios.get(`${server}/api/database`);
      await setDbNames(() => {
        return Object.keys(names.data.databases);
      });
    };
    getDatabaseNames();
  }, []);

  if (isLoading) {
    return (
      <ArticleLayout>
        <div>Loading</div>
      </ArticleLayout>
    );
  }
  if (isError) {
    return (
      <ArticleLayout>
        <div>Error</div>
      </ArticleLayout>
    );
  }
  if (isSuccess) {
    return (
      <ArticleLayout>
        <PostsMenu setCntMenu={setCntMenu} menuItems={dbNames} />
        {posts && <Posts cntMenu={cntMenu} posts={posts} />}
      </ArticleLayout>
    );
  }
}
