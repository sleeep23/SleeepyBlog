import React from 'react';
import Link from 'next/link';

function PostLink({ id }: { id: string }) {
  const link = `/posts/${id}`;
  return <Link href={link}>👉 {id}</Link>;
}

export default PostLink;
