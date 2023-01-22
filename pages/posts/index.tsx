import React, { use, useEffect, useState } from 'react';
import ArticleLayout from '../../components/layout/articleLayout';
import Posts from '../../components/Posts';
import { PostsType } from '../../lib/type';
import { NOTION_TOKEN, server } from '../../config';

async function getPosts(): Promise<PostsType> {
  const posts = await fetch(`${server}/api/posts`);
  return posts.json();
}

export default function Index() {
  const [isProject, setIsProject] = useState(true);
  const [posts, setPosts] = useState<PostsType | undefined>(undefined);
  useEffect(() => {
    const getFn = async () => {
      const res = await getPosts();
      setPosts(res);
    };
    getFn();
  }, []);
  return <ArticleLayout>{posts && <Posts data={posts} />}</ArticleLayout>;
}
