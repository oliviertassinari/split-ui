'use client';

import * as React from 'react';
import styles from '../../../components/CodeBlock.module.css';
import 'syntax-highlight-element/themes/prettylights.css';

export interface CodeblockProps {
  content: string;
  language: string;
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'syntax-highlight': any;
    }
  }
}

export default function CodeblockClient({ content, language }: CodeblockProps) {
  React.useLayoutEffect(() => {
    import('syntax-highlight-element');
  }, []);

  return (
    <div className={styles.codeWrapper}>
      <syntax-highlight language="js">{content}</syntax-highlight>
    </div>
  );
}
