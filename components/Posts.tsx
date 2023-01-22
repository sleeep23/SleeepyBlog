import React, { Fragment } from 'react';
import { DbPostContents, PostsType, TagType } from '../lib/type';
// import { getBlocks, getDatabase, getPage } from '../lib/notion';
// export const Text = ({ text }: any) => {
//   if (!text) {
//     return null;
//   }
//   return text.map((value: any, index: number) => {
//     const {
//       annotations: { bold, code, color, italic, strikethrough, underline },
//       text,
//     } = value;
//     return (
//       <span
//         key={index}
//         className={[
//           bold ? styles.bold : '',
//           code ? styles.code : '',
//           italic ? styles.italic : '',
//           strikethrough ? styles.strikethrough : '',
//           underline ? styles.underline : '',
//         ].join(' ')}
//         style={color !== 'default' ? { color } : {}}
//       >
//         {text.link ? <a href={text.link.url}>{text.content}</a> : text.content}
//       </span>
//     );
//   });
// };
//
// const renderNestedList = (block) => {
//   const { type } = block;
//   const value = block[type];
//   if (!value) return null;
//
//   const isNumberedList = value.children[0].type === 'numbered_list_item';
//
//   if (isNumberedList) {
//     return <ol>{value.children.map((block) => renderBlock(block))}</ol>;
//   }
//   return <ul>{value.children.map((block) => renderBlock(block))}</ul>;
// };
//
// const renderBlock = (block) => {
//   const { type, id } = block;
//   const value = block[type];
//
//   switch (type) {
//     case 'paragraph':
//       return (
//         <p>
//           <Text text={value.rich_text} />
//         </p>
//       );
//     case 'heading_1':
//       return (
//         <h1>
//           <Text text={value.rich_text} />
//         </h1>
//       );
//     case 'heading_2':
//       return (
//         <h2>
//           <Text text={value.rich_text} />
//         </h2>
//       );
//     case 'heading_3':
//       return (
//         <h3>
//           <Text text={value.rich_text} />
//         </h3>
//       );
//     case 'bulleted_list_item':
//     case 'numbered_list_item':
//       return (
//         <li>
//           <Text text={value.rich_text} />
//           {!!value.children && renderNestedList(block)}
//         </li>
//       );
//     case 'to_do':
//       return (
//         <div>
//           <label htmlFor={id}>
//             <input type="checkbox" id={id} defaultChecked={value.checked} />{' '}
//             <Text text={value.rich_text} />
//           </label>
//         </div>
//       );
//     case 'toggle':
//       return (
//         <details>
//           <summary>
//             <Text text={value.rich_text} />
//           </summary>
//           {value.children?.map((block) => (
//             <Fragment key={block.id}>{renderBlock(block)}</Fragment>
//           ))}
//         </details>
//       );
//     case 'child_page':
//       return <p>{value.title}</p>;
//     case 'image':
//       const src =
//         value.type === 'external' ? value.external.url : value.file.url;
//       const caption = value.caption ? value.caption[0]?.plain_text : '';
//       return (
//         <figure>
//           <img src={src} alt={caption} />
//           {caption && <figcaption>{caption}</figcaption>}
//         </figure>
//       );
//     case 'divider':
//       return <hr key={id} />;
//     case 'quote':
//       return <blockquote key={id}>{value.rich_text[0].plain_text}</blockquote>;
//     case 'code':
//       return (
//         <pre className={styles.pre}>
//           <code className={styles.code_block} key={id}>
//             {value.rich_text[0].plain_text}
//           </code>
//         </pre>
//       );
//     case 'file':
//       const src_file =
//         value.type === 'external' ? value.external.url : value.file.url;
//       const splitSourceArray = src_file.split('/');
//       const lastElementInArray = splitSourceArray[splitSourceArray.length - 1];
//       const caption_file = value.caption ? value.caption[0]?.plain_text : '';
//       return (
//         <figure>
//           <div className={styles.file}>
//             📎{' '}
//             <Link href={src_file} passHref>
//               {lastElementInArray.split('?')[0]}
//             </Link>
//           </div>
//           {caption_file && <figcaption>{caption_file}</figcaption>}
//         </figure>
//       );
//     case 'bookmark':
//       const href = value.url;
//       return (
//         <a href={href} target="_brank" className={styles.bookmark}>
//           {href}
//         </a>
//       );
//     default:
//       return `❌ Unsupported block (${
//         type === 'unsupported' ? 'unsupported by Notion API' : type
//       })`;
//   }
// };

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
                <p>Id : {post.id}</p>
                <p>Title : {post.title}</p>
                <p>Description : {post.description}</p>
                <p>Date : {post.date}</p>
                <div>
                  {post.tags.map((tag: TagType) => {
                    return <p key={tag.id}>{tag.name}</p>;
                  })}
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
