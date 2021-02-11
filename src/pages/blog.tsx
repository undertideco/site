import fs from 'fs';
import matter from 'gray-matter';
import { keyBy } from 'lodash';
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
import { readBlogPosts, readTeamMembers } from '../content';

const Wrapper = styled.div`
  padding: 32px 21px;

  ${breakpoint('tablet')`
       padding: .5rem 3rem;
   `}
`;

interface Props {
  posts: (App.BlogPost & { author: App.TeamMember | null })[];
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
  const blogPosts = readBlogPosts();
  const teamMembers = readTeamMembers();
  const teamMembersKeyed = keyBy(teamMembers, 'name');

  const posts = blogPosts.map(post => ({
    ...post,
    author: teamMembersKeyed[post.data.author] ?? null,
  }));

  return { props: { posts } };
};
