import { css, Global } from '@emotion/react';

const font_default =
  '"Spoqa Han Sans Neo", "JetBrains Mono", Menlo, Monaco, "Courier New", monospace, "sans-serif"';

// Theme colors
const light = '#e4e9f8';
const lightAccent = '#d8dff0';
const lightDarker = '#d5d9ee';

const dark = '#262738';
const darkAccent = '#2f3044';
const darker = '#191a22';

// Main style colors
const primary = '#7e37a4';
const secondary = '#3dffc5';
const grayLight = '#b0bccc';
const grayDark = '#606071';
const grayAccentLight = '#b7b7c9';
const grayAccentDark = '#f2f4f6';

// Additional style colors
const buttonDisabled = '#9e9eb6';
const warning = '#e64358';
const codeHighlight = '#37394e';
const avatar = '#281483';
const sunrise =
  'linear-gradient(to bottom,#676caf 0%,#4f4983 50%,#6e488b 100%)';
const sunset = 'linear-gradient(to bottom,#1b0e24 0%,#2b174c 50%,#381d6e 100%)';

export function GlobalStyles() {
  return (
    <>
      <Global
        styles={css`
          @import url('//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css');
        `}
      />
      <Global
        styles={{
          '@font-face': {
            fontFamily: 'JetBrains Mono',
            fontStyle: 'normal',
            fontWeight: 400,
            fontDisplay: 'swap',
            src: 'url("/fonts/JetBrainsMono-Regular.woff2") format("woff2")',
          },
        }}
      />
      <Global
        styles={{
          'body, body[data-theme="light"], body[data-theme="dark"]': {
            '--font-primary': font_default,
            '--color-light': lightAccent,
            '--color-dark': darkAccent,
          },
          'body, body[data-theme="light"]': {
            '--color-primary': primary,
            '--color-bg': light,
            '--color-text': grayAccentDark,
            '--color-heading': dark,
            '--color-gray': grayDark,
            '--color-accent-gray': grayAccentLight,
            '--color-accent': lightAccent,
            '--color-accent-darker': lightDarker,
            '--color-gradient': sunset,
            '--page-bg': lightDarker,
            '--code-bg': darkAccent,
          },

          'body[data-theme="dark"]': {
            '--color-primary': secondary,
            '--color-bg': dark,
            '--color-text': lightDarker,
            '--color-heading': light,
            '--color-gray': grayLight,
            '--color-accent-gray': grayAccentDark,
            '--color-accent': darkAccent,
            '--color-accent-darker': darker,
            '--color-gradient': sunrise,
            '--page-bg': darkAccent,
            '--code-bg': darkAccent,
          },
          'html, body, div, span, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, abbr, address, cite, code, del, dfn, em, img, ins, kbd, q, samp, small, strong, sub, sup, var, b, i, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, figcaption, figure, footer, header, hgroup, menu, nav, section, summary, time, mark, audio, video':
            {
              margin: 0,
              padding: 0,
              border: 0,
              fontSize: '100%',
              verticalAlign: 'baseline',
            },
          'article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section':
            {
              display: 'block',
            },
          'nav ul': {
            listStyle: 'none',
          },
          'blockquote, q': {
            quotes: 'none',
          },
          'blockquote:before, blockquote:after, q:before, q:after': {
            content: '" "',
          },
          'html, body': {
            backgroundColor: '#191f28',
            fontFamily: 'var(--font-primary)',
            color: 'var(--color-text)',
            WebkitTextSizeAdjust: '100%',
          },
          '*': {
            margin: 0,
            padding: 0,
            boxSizing: 'border-box',
            '&:before, &:after': {
              boxSizing: 'border-box',
            },
            '&:focus': {
              boxShadow: '0 0 0 2px var(--color-primary)',
              outline: 'none',
              '@media(max-width: 480px)': {
                boxShadow: 'none',
              },
            },
            '&:focus:not(:focus-visible)': { boxShadow: 'none' },
          },
          a: {
            cursor: 'pointer',
            margin: 0,
            padding: 0,
            fontSize: '100%',
            verticalAlign: 'baseline',
            background: 'transparent',
            color: 'var(--color-primary)',
            textDecoration: 'none',
          },
          p: {
            margin: 0,
            padding: 0,
            lineHeight: '1.8rem',
          },
          'ul, li': {
            listStyle: 'none',
            margin: 0,
            padding: 0,
          },
          'button, input, textarea': {
            fontFamily: 'var(--font-primary)',
          },
          button: {
            background: 'transparent',
            border: 'none',
            fontFamily: 'inherit',
            fontSize: 'inherit',
            fontWeight: 'inherit',
            color: 'var(--color-primary)',
            cursor: 'pointer',
          },
          '@keyframes slideUpSection': {
            '0%': {
              transform: 'translate3d(0, 100%, 0)',
            },
            '100%': {
              transform: 'translate3d(0, 0, 0)',
            },
          },
          '@keyframes slideDownSection': {
            '0%': {
              transform: 'translate3d(0, 0, 0)',
            },
            '100%': {
              transform: 'translate3d(0, 100%, 0)',
            },
          },
          '@keyframes slideUp': {
            '0%': {
              opacity: 0,
              transform: 'translate3d(0, 100%, 0)',
            },
            '100%': {
              transform: 'translate3d(0, 0, 0)',
              opacity: 1,
            },
          },
          '@keyframes slideDown': {
            '0%': {
              opacity: 0,
              transform: 'translate3d(0, -100%, 0)',
            },
            '100%': {
              transform: 'translate3d(0, 0, 0)',
              opacity: 1,
            },
          },
          '@keyframes tooltipUp': {
            '0%': {
              opacity: 0,
              transform: 'translate3d(0, 100%, 0)',
            },
            '10%': {
              transform: 'translate3d(0, 0, 0)',
              opacity: 1,
            },
            '90%': {
              transform: 'translate3d(0, 0, 0)',
              opacity: 1,
            },
            '100%': {
              transform: 'translate3d(0, 100%, 0)',
              opacity: 0,
            },
          },
          '@keyframes tooltipDown': {
            '0%': {
              opacity: 0,
              transform: 'translate3d(0, -100%, 0)',
            },
            '10%': {
              transform: 'translate3d(0, 0, 0)',
              opacity: 1,
            },
            '90%': {
              transform: 'translate3d(0, 0, 0)',
              opacity: 1,
            },
            '100%': {
              transform: 'translate3d(0, -100%, 0)',
              opacity: 0,
            },
          },
          '@keyframes dash': {
            '0%': {
              strokeDasharray: '1, 150',
              strokeDashoffset: '0',
            },
            '50%': {
              strokeDasharray: '90, 150',
              strokeDashoffset: '-35',
            },
            '100%': {
              strokeDasharray: '90, 150',
              strokeDashoffset: '-124',
            },
          },
          '@keyframes spin': {
            from: { transform: 'rotate(0deg)' },
            to: { transform: 'rotate(180deg)' },
          },
        }}
      />
    </>
  );
}
