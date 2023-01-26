import React, { use, useEffect, useState } from 'react';
import ArticleLayout from '../../components/layout/articleLayout';
import Posts from '../../components/Posts';
import { PostsType } from '../../lib/type';
import { NOTION_TOKEN, server } from '../../config';
import PostsMenu from '../../components/PostsMenu';

async function getPosts(): Promise<PostsType> {
  const posts = await fetch(`${server}/api/posts`);
  return posts.json();
}

export default function Index() {
  const [posts, setPosts] = useState<PostsType | undefined>(undefined);
  const [cntMenu, setCntMenu] = useState<string>('All');
  const menuItems = posts?.map((db) => db.name);
  useEffect(() => {
    const getFn = async () => {
      const res = await getPosts();
      setPosts(res);
    };
    getFn();
  }, []);
  console.log(posts);
  return (
    <ArticleLayout>
      <PostsMenu setCntMenu={setCntMenu} menuItems={menuItems} />
      {posts && <Posts cntMenu={cntMenu} data={posts} />}
    </ArticleLayout>
  );
}
