'use client';
import * as React from 'react';
import { toJsxRuntime } from 'hast-util-to-jsx-runtime';
import { Fragment, jsx, jsxs } from 'react/jsx-runtime';
import { common, createLowlight } from 'lowlight';
import styles from '../../../components/CodeBlock.module.css';

const lowlight = createLowlight(common);

export interface CodeblockProps {
  content: string;
  language: string;
}

export default function Codeblock({ content, language }: CodeblockProps) {
  const tree = lowlight.highlight(language, content);

  return (
    <div className={styles.codeWrapper}>
      <pre>
        <code className={`hljs language-${language}`}>
          {toJsxRuntime(tree, { Fragment, jsx, jsxs })}
        </code>
      </pre>
    </div>
  );
}
