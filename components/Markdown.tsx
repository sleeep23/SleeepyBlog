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
  white-space: pre-wrap;
  color: #a9adc1;
  .codeStyle, pre, code, code span {
    font-family: "JetBrains Mono", Menlo, Monaco, "Courier New", monospace;
    font-style: normal;
    font-size: 16px;
    border: none;
    box-shadow: none;
    text-shadow: none;
    @media (max-width: 768px) {
      font-size: 12px;
    },
  }
  pre {
    font-size: 15px;
    margin: 0 -1.5rem 2.5rem -1.5rem;
  }
  .codeStyle {
    padding: 1.5rem 0 1.5rem 1.5rem !important;
    overflow: scroll;
    border-radius: 5px;
    background-color: #262738 !important;

    code {
      padding-right: 1.5rem;
      background-color: transparent !important;
      transform: translateZ(0);
      min-width: 100%;
      float: left;

      & > span[data="highlight"] {
        display: block;

        &:last-of-type {
          display: none;
        }
      }
    }
    @media(max-width: 768px) {
      border-radius: 0 !important;
    }
  }
  code {
    color: #EB5757;
    font-size: 16px;
    font-weight: 600;
    word-wrap: break-word;
    background-color: #333d4b;
    padding: 0 4px;
    border-radius: 5px;
    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
  li {
    list-style: none;
  }
  p code {
    text-shadow: none !important;
  }
  pre code {
    font-family: "JetBrains Mono", Menlo, Monaco, "Courier New", monospace !important;
    &::before, &::after {
      content: 'none'
    }
  }
  h3 code {
    color: inherit;
  }
  span.linenumber {
    display: none !important;
  }
  [data="highlight"] {
    // Line highlight styles
    background: #37394e;
    margin: 0 -1.5rem;
    padding: 0 1.5rem;
  }
  h1 {
    color: #f2f4f6;
    font-size: 30px;
    @media (max-width: 768px) {
      font-size: 28px;
    }
  }
  h2 {
    color: #f2f4f6;
    font-size: 22px;
    @media (max-width: 768px) {
      font-size: 20px;
    }
  }
  h3 {
    color: #f2f4f6;
    font-size: 18px;
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
    <ReactMarkdown components={MarkdownComponents} css={styleMarkdown}>
      {content}
    </ReactMarkdown>
  );
}
