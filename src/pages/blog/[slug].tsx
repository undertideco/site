import fs from 'fs';
import matter from 'gray-matter';
import moment from 'moment';
import { GetStaticPaths, GetStaticProps } from 'next';
import path from 'path';
import { ParsedUrlQuery } from 'querystring';
import React from 'react';
import styled from 'styled-components';
import { breakpoint } from 'styled-components-breakpoint';

import { get, set } from '../../buildCache';
import LargeTitle from '../../components/large-title';
import Layout from '../../components/Layout';
import MDX from '../../components/MDX';
import SEO from '../../components/SEO';

const Wrapper = styled.div`
  padding: 32px 21px;

  ${breakpoint('tablet')`
       padding: .5rem 3rem;
   `}
`;

const Author = styled.p``;

const Timestamp = styled.time``;

interface Props {
  post: App.BlogPost;
}

const BlogTemplatePage: React.FC<Props> = function(props) {
  const { post } = props;
  const { data, content } = post;
  const { title, published_at, author } = data;

  return (
    <Layout>
      <SEO title={title} />
      <Wrapper>
        <LargeTitle>{title}</LargeTitle>
        <Author>{author}</Author>
        <Timestamp dateTime={published_at}>
          {moment(published_at).fromNow()}
        </Timestamp>
        <MDX>{content}</MDX>
      </Wrapper>
    </Layout>
  );
};

export default BlogTemplatePage;

interface Params extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  const slug = params?.slug ?? null;

  if (slug === null) {
    throw new Error('no slug');
  }

  const filePath = await get(['blog', slug]);
  if (filePath === null) {
    throw new Error(`Invalid build cache entry for '${slug}'`);
  }

  const fileData = fs.readFileSync(filePath);

  const parsedData = matter(fileData);

  return {
    props: {
      post: {
        //@ts-ignore
        data: parsedData.data as App.BlogPost['data'],
        content: parsedData.content,
      },
    },
  };
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const dir = path.join(process.cwd(), 'content/blog_posts');

  const files = fs.readdirSync(dir).filter(file => file.endsWith('.mdx'));

  const paths = [];

  for (const file of files) {
    const filePath = path.join(dir, file);
    const fileData = fs.readFileSync(filePath);
    const parsedData = matter(fileData);

    const { slug } = parsedData.data;

    await set(['blog', slug], filePath);

    paths.push({ params: { slug } });
  }

  return { paths, fallback: false };
};
