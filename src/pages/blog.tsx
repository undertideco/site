import { keyBy } from 'lodash';
import { GetStaticProps } from 'next';
import React from 'react';
import styled from 'styled-components';
import { breakpoint } from 'styled-components-breakpoint';

import BlogPostBlock from '../components/BlogPostBlock';
import LargeTitle from '../components/LargeTitle';
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

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;

  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;

const ListItem = styled.li``;

interface Props {
  posts: (App.BlogPost & { author: App.TeamMember | null })[];
}

const BlogPage: React.FC<Props> = function (props) {
  const { posts } = props;

  return (
    <Layout>
      <SEO title="Blog" />
      <Wrapper>
        <LargeTitle>Blog</LargeTitle>
        <List>
          {posts.map((post) => (
            <ListItem key={post.data.slug}>
              <StyledLink href={`/blog/${post.data.slug}`}>
                <BlogPostBlock post={post} />
              </StyledLink>
            </ListItem>
          ))}
        </List>
      </Wrapper>
    </Layout>
  );
};

export default BlogPage;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const blogPosts = readBlogPosts();
  const teamMembers = readTeamMembers();
  const teamMembersKeyed = keyBy(teamMembers, 'name');

  const posts = blogPosts.map((post) => ({
    ...post,
    author: teamMembersKeyed[post.data.author] ?? null,
  }));

  return { props: { posts } };
};
