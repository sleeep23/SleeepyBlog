import React from 'react';
import styled from '@emotion/styled';

import ReactMarkdown from 'react-markdown';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import tsx from 'react-syntax-highlighter/dist/cjs/languages/prism/tsx';
import typescript from 'react-syntax-highlighter/dist/cjs/languages/prism/typescript';
import scss from 'react-syntax-highlighter/dist/cjs/languages/prism/scss';
import bash from 'react-syntax-highlighter/dist/cjs/languages/prism/bash';
import markdown from 'react-syntax-highlighter/dist/cjs/languages/prism/markdown';
import json from 'react-syntax-highlighter/dist/cjs/languages/prism/json';

import rangeParser from 'parse-numeric-range';
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { css } from '@emotion/react';

SyntaxHighlighter.registerLanguage('tsx', tsx);
SyntaxHighlighter.registerLanguage('typescript', typescript);
SyntaxHighlighter.registerLanguage('scss', scss);
SyntaxHighlighter.registerLanguage('bash', bash);
SyntaxHighlighter.registerLanguage('markdown', markdown);
SyntaxHighlighter.registerLanguage('json', json);

const ReactMarkdownWithLineBreak = styled(ReactMarkdown)`
  white-space: pre-wrap;
`;

export function Markdown({ content }: { content: string }) {
  const syntaxTheme = oneDark;
  const styleMarkdown = css({
    '.codeStyle, pre, code, code span': {
      // Your SyntaxHighlighter override styles here
      fontFamily: '"JetBrains Mono", Menlo, Monaco, "Courier New", monospace',
      fontStyle: 'normal',
      fontSize: 16,
      border: 'none',
      boxShadow: 'none',
      textShadow: 'none',
      '@media(max-width: 768px)': {
        fontSize: 14,
      },
    },
    pre: {
      fontSize: 15,
      margin: '0 -1.5rem 2.5rem -1.5rem',
    },
    '.codeStyle': {
      padding: '1.5rem 0 1.5rem 1.5rem !important',
      overflow: 'scroll',
      borderRadius: 5,
      background: 'rgb(171, 178, 191) !important',
      backgroundColor: '#262738 !important',
      code: {
        paddingRight: '1.5rem',
        backgroundColor: 'transparent !important',
        transform: 'translateZ(0)',
        minWidth: '100%',
        float: 'left',
        '& > span[data="highlight"]': {
          display: 'block',
          '&:last-of-type': {
            display: 'none',
          },
        },
      },
      '@media(max-width: 768px)': {
        borderRadius: '0 !important',
      },
    },
    code: {
      // Your general code styles here
      wordWrap: 'break-word',
      color: '#7e37a4',
      borderRadius: 5,
      '&::before, &::after': {
        content: '"`"',
        color: '#7e37a4',
      },
      '@media(max-width: 768px)': {
        fontSize: 16,
      },
    },
    'p code': {
      textShadow: 'none !important',
    },
    'pre code': {
      // Your code-block styles
      fontFamily:
        '"JetBrains Mono", Menlo, Monaco, "Courier New", monospace !important',
      '&::before, &::after': { content: 'none' },
    },
    'h3 code': {
      color: 'inherit',
    },
    'span.linenumber': {
      display: 'none !important',
    },
    '[data="highlight"]': {
      // Line highlight styles
      background: '#37394e',
      margin: '0 -1.5rem',
      padding: '0 1.5rem',
    },
  });
  const MarkdownComponents: object = {
    code({ node, inline, className, ...props }) {
      const match = /language-(\w+)/.exec(className || '');
      const hasMeta = node?.data?.meta;
      const applyHighlights: object = (applyHighlights: number) => {
        if (hasMeta) {
          const RE = /{([\d,-]+)}/;
          const metadata = node.data.meta?.replace(/\s/g, '');
          const strlineNumbers = RE?.test(metadata)
            ? RE?.exec(metadata)[1]
            : '0';
          const highlight = rangeParser(strlineNumbers);
          const data: string | null = highlight.includes(applyHighlights)
            ? 'highlight'
            : null;
          return { data };
        } else {
          return {};
        }
      };
      return match ? (
        <SyntaxHighlighter
          style={syntaxTheme}
          language={match[1]}
          PreTag="div"
          className="codeStyle"
          showLineNumbers={true}
          wrapLines={!!hasMeta}
          useInlineStyles={true}
          lineProps={applyHighlights}
          {...props}
        />
      ) : (
        <code className={className} {...props} />
      );
    },
  };
  return (
    <ReactMarkdownWithLineBreak
      components={MarkdownComponents}
      css={styleMarkdown}
    >
      {content}
    </ReactMarkdownWithLineBreak>
  );
}
