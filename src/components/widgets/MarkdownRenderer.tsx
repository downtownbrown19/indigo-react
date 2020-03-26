import * as React from 'react';
import ReactMarkdown from 'react-markdown/with-html';
import styled from 'styled-components';

const MarkdownRenderer = styled(ReactMarkdown)`
  width: 100%;

  * {
    color: ${p => p.theme.colors.black};
    font-size: 12px;
    font-family: 'Inter', sans-serif;
    line-height: 1.5;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  p,
  a,
  ul,
  blockquote,
  code,
  pre {
    padding-bottom: 8px;
    padding-top: 8px;
  }

  h2,
  h3,
  h4,
  h5,
  p,
  a,
  ul {
    font-weight: 400;
  }

  h1 {
    font-weight: 600;
    font-size: 14px;
  }

  h2 {
    font-weight: 600;
    font-size: 12px;
  }

  h3 {
    font-weight: 600;
    font-size: 12px;
  }

  h4 {
    font-weight: 400;
    font-size: 12px;
    color: ${p => p.theme.colors.gray5};
  }

  pre,
  code {
    padding: 1px 2px;
    font-family: 'Source Code Pro', mono;
    background-color: ${p => p.theme.colors.gray0};
    border-radius: 2px;
  }

  pre {
    padding: 8px;
  }

  pre span {
    font-family: 'Source Code Pro', mono;
  }

  ul > li {
    line-height: 1.5;
  }

  a {
  }

  img {
    margin-bottom: 8px;
  }

  th,
  td {
    min-width: 120px;
    border-style: solid;
    border-width: 1px;
    border-color: ${p => p.theme.colors.gray2};
    padding: 8px;
  }

  th {
    font-weight: 600;
    text-align: left;
  }

  table {
    border-collapse: collapse;
  }

  hr {
    border: none;
    border-top-width: 1px;
    border-top-color: ${p => p.theme.colors.gray2};
    border-top-style: solid;
  }

  strong,
  b {
    font-weight: 600;
  }

  em {
    font-style: italic;
  }

  ol {
    list-style-type: decimal;
    margin-left: 16px;
  }

  ul {
    list-style-type: disc;
    margin-left: 16px;
  }

  blockquote {
    padding-left: 8px;
    border-left: 4px solid ${p => p.theme.colors.gray0};
  }

  blockquote p {
    padding: 0;
  }
`;

MarkdownRenderer.defaultProps = {
  source: '',
  className: '',
  escapeHtml: false,
  skipHtml: false,
  sourcePos: false,
  rawSourcePos: false,
  includeNodeIndex: false,
  renderers: {
    code: p => (
      <pre>
        <span>{p.value}</span>
      </pre>
    ),
  },
};

export default MarkdownRenderer;
