import React from 'react';
import { CodeBlock, shadesOfPurple } from 'react-code-blocks';

export const Code = ({ children }) => (
  <CodeBlock
    text={children}
    language="tsx"
    showLineNumbers={true}
    theme={shadesOfPurple}
  />
);