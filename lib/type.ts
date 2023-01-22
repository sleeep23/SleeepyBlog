export interface DbPostContents {
  name: string;
  posts?: Array<PostThumbnailType>;
}

export interface PostThumbnailType {
  id: string;
  title: string;
  description: string;
  date: string;
  tags: Array<TagType>;
}

export interface PostsType extends Array<DbPostContents> {}

export interface TagType {
  id: string;
  name: string;
  color: string;
}

export interface PostContentType {
  content: string;
  id: string;
}
