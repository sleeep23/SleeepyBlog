import React, { Fragment } from 'react';
import { DbPostContents, PostsType, TagType } from '../lib/type';
import PostLink from './PostLink';
import Tags from './Tags';

export default function Posts({ data }: { data: PostsType }) {
  const content = data.map((db: DbPostContents, index) => {
    return (
      <div
        key={index}
        style={{
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}
      >
        <p>DB : {db.name}</p>
        <div
          style={{
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}
        >
          {db.posts?.map((post) => {
            return (
              <div key={post.id}>
                <PostLink id={post.id} />
                <p>Title : {post.title}</p>
                <p>Description : {post.description}</p>
                <p>Date : {post.date}</p>
                <div>
                  {/*{post.tags.map((tag: TagType) => {*/}
                  {/*  return <p key={tag.id}>{tag.name}</p>;*/}
                  {/*})}*/}
                  <Tags tags={post.tags} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  });
  return (
    <div
      style={{
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}
    >
      {content}
    </div>
  );
}
