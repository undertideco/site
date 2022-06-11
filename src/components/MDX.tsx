// Modified from https://github.com/mdx-js/mdx/blob/main/packages/runtime/src/index.js
//
// The MIT License (MIT)
//
// Copyright (c) 2017-2018 Compositor and Vercel, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

import { EvaluateOptions, evaluateSync } from '@mdx-js/mdx';
import * as provider from '@mdx-js/react';
import type { MDXComponents } from 'mdx/types';
import React from 'react';
import * as runtime from 'react/jsx-runtime';
import styled from 'styled-components';

const Error = styled.pre`
  color: #e22424;
  display: block;
`;

interface Props extends Omit<EvaluateOptions, 'jsx' | 'jsxs' | 'Fragment'> {
  components?: MDXComponents;
  children: string;
}

const MDX: React.FC<Props> = function (props) {
  const { components = {}, children, ...evalOptions } = props;

  const Component = React.useMemo(() => {
    // @ts-ignore
    const { default: MDXComponent } = evaluateSync(children, {
      ...provider,
      ...runtime,
      ...evalOptions,
    });

    return <MDXComponent components={components} />;
  }, [children, components, evalOptions]);

  if (Component == null) {
    return <Error>An error occurred</Error>;
  }

  return Component;
};

export default MDX;
