// fetchers

import { server } from '../config';
import { PostsType } from './type';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

export const fetchPosts = async () => {
  const posts = await axios.get(`${server}/api/posts`);
  return posts.data;
};

export const fetchSinglePost = async (id: string) => {
  const post = await axios.get(`${server}/api/posts/${id}`);
  return post.data;
};
