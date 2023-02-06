import React from 'react';

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

const styleMarkdown = css`
  background-color: inherit;
  line-height: 1.8;
  color: #a9adc1;
  word-break: keep-all;
  overflow-wrap: break-word;
  .codeStyle,
  pre,
  code,
  code span {
    font-family: 'JetBrains Mono', Menlo, Monaco, 'Courier New', monospace;
    font-style: normal;
    border: none;
    box-shadow: none;
    text-shadow: none;
    @media (max-width: 768px) {
      font-size: 14px;
    }
  }
  pre {
    background-color: inherit;
    padding: 0;
    margin: 20px 0;
  }
  .codeStyle {
    overflow: scroll;
    background-color: #262738 !important;
    margin: 0;
    border-radius: 8px !important;
    code {
      padding-right: 1.5rem;
      background-color: transparent !important;
      transform: translateZ(0);
      min-width: 100%;
      float: left;
      & > span[data='highlight'] {
        display: block;
        &:last-of-type {
          display: none;
        }
      }
    }
    @media (max-width: 768px) {
      border-radius: 0 !important;
    }
  }
  code {
    color: #eb5757;
    word-wrap: break-word;
  }
  a {
    color: #3182f6;
  }
`;

export function Markdown({ content }: { content: string }) {
  const syntaxTheme = oneDark;
  const MarkdownComponents: object = {
    code({ node, inline, className, ...props }: any) {
      const match = /language-(\w+)/.exec(className || '');
      const hasMeta = node?.data?.meta;
      const applyHighlights: object = (applyHighlights: number) => {
        if (hasMeta) {
          const RE = /{([\d,-]+)}/;
          const metadata = node.data.meta?.replace(/\s/g, '');
          const strlineNumbers = RE?.test(metadata)
            ? RE?.exec(metadata)?.at(1)
            : '0';
          const highlight = strlineNumbers && rangeParser(strlineNumbers);
          const data: string | null =
            highlight && highlight.includes(applyHighlights)
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
    <ReactMarkdown
      components={MarkdownComponents}
      css={styleMarkdown}
      className="markdown-body"
    >
      {content}
    </ReactMarkdown>
  );
}
