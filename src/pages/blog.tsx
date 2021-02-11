import fs from 'fs';
import matter from 'gray-matter';
import { GetStaticProps } from 'next';
import path from 'path';
import React from 'react';
import styled from 'styled-components';
import { breakpoint } from 'styled-components-breakpoint';

import BlogPostBlock from '../components/BlogPostBlock';
import LargeTitle from '../components/large-title';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import StyledLink from '../components/styled-link';

const Wrapper = styled.div`
  padding: 32px 21px;

  ${breakpoint('tablet')`
       padding: .5rem 3rem;
   `}
`;

interface Props {
  posts: App.BlogPost[];
}

const BlogPage: React.FC<Props> = function(props) {
  const { posts } = props;

  return (
    <Layout>
      <SEO title="Blog" />
      <Wrapper>
        <LargeTitle>Blog</LargeTitle>
        {posts.map(post => (
          <StyledLink key={post.data.slug} href={`/blog/${post.data.slug}`}>
            <BlogPostBlock post={post} />
          </StyledLink>
        ))}
      </Wrapper>
    </Layout>
  );
};

export default BlogPage;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const dir = path.join(process.cwd(), 'content/blog_posts');

  const files = fs.readdirSync(dir).filter(file => file.endsWith('.mdx'));

  const posts: App.BlogPost[] = [];

  for (const file of files) {
    const fileData = fs.readFileSync(path.join(dir, file));

    const parsedData = matter(fileData);

    posts.push({
      //@ts-ignore
      data: parsedData.data,
      content: parsedData.content,
    });
  }

  return { props: { posts } };
};
