import { css, Global } from '@emotion/react';

const font_default =
  '"Spoqa Han Sans Neo", "JetBrains Mono", Menlo, Monaco, "Courier New", monospace, "sans-serif"';

const blue500 = '#3182f6';
const grey50 = '#f9fafb';
const grey100 = '#f2f4f6';
const grey200 = '#e5e8eb';
const grey400 = '#b0b8c1';
const grey600 = '#4e5968';
const grey700 = '#333d4b';
const grey800 = '#1f2028';
const grey900 = '#191919';
const greyBlue900 = '#191f28';

// Theme colors
const darkShimmerBg = '#3a3d4a';
const darkShimmerBgLoading = '#2e3039';

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
          },
          'body, body[data-theme="light"]': {
            '--color-text': greyBlue900,
            '--color-text-header-on-scroll': grey100,
            '--color-bg': grey50,
            '--color-btn-hover': grey200,
            '--color-tags': grey400,
            '--color-skeleton': grey100,
            '--color-skeleton-loading': grey200,
            '--color-shadow': grey600,
          },

          'body[data-theme="dark"]': {
            '--color-text': grey100,
            '--color-text-header-on-scroll': grey100,
            '--color-bg': grey800,
            '--color-btn-hover': grey700,
            '--color-tags': grey600,
            '--color-skeleton': darkShimmerBg,
            '--color-skeleton-loading': darkShimmerBgLoading,
            '--color-shadow': grey900,
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
          'blockquote, q': {
            quotes: 'none',
          },
          'blockquote:before, blockquote:after, q:before, q:after': {
            content: '" "',
          },
          'html, body': {
            backgroundColor: 'var(--color-bg)',
            fontFamily: 'var(--font-primary)',
            color: 'var(--color-text)',
            WebkitTextSizeAdjust: '100%',
            theme: 'dark',
          },
          '*': {
            margin: 0,
            padding: 0,
            boxSizing: 'border-box',
            '&:before, &:after': {
              boxSizing: 'border-box',
            },
            '&:focus': {
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
            textDecoration: 'none',
          },
          p: {
            margin: 0,
            padding: 0,
            lineHeight: '1.8rem',
            display: 'inline-block',
          },
          'ul, li': {
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
            cursor: 'pointer',
          },
        }}
      />
    </>
  );
}
