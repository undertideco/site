import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/vsDark';
import React from 'react';
import styled from 'styled-components';

const Pre = styled.pre`
  font-family: ui-monospace, Menlo, Monaco, 'Cascadia Mono', 'Segoe UI Mono',
    'Roboto Mono', 'Oxygen Mono', 'Ubuntu Monospace', 'Source Code Pro',
    'Fira Mono', 'Droid Sans Mono', 'Courier New', monospace;
`;

interface Props {
  className?: string;
}

const CodeBlock: React.FC<Props> = function(props) {
  const { children, className } = props;

  const language = className?.replace(/language-/, '') ?? 'javascript';

  return (
    <>
      {
        //@ts-ignore
        <Highlight
          {...defaultProps}
          code={children}
          language={language}
          theme={theme}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <Pre className={className} style={{ ...style, padding: '20px' }}>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </Pre>
          )}
        </Highlight>
      }
    </>
  );
};

export default CodeBlock;
