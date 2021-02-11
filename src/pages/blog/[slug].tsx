import fs from 'fs';
import matter from 'gray-matter';
import { keyBy } from 'lodash';
import moment from 'moment';
import { GetStaticPaths, GetStaticProps } from 'next';
import path from 'path';
import { ParsedUrlQuery } from 'querystring';
import React from 'react';
import styled from 'styled-components';
import { breakpoint } from 'styled-components-breakpoint';

import { get, set } from '../../buildCache';
import BlogAuthor from '../../components/BlogAuthor';
import LargeTitle from '../../components/large-title';
import Layout from '../../components/Layout';
import MDX from '../../components/MDX';
import SEO from '../../components/SEO';
import { readTeamMembers } from '../../content';
import mdxComponents from '../../mdxComponents';

const Wrapper = styled.div`
  padding: 32px 21px;

  ${breakpoint('tablet')`
       padding: .5rem 3rem;
   `}
`;

const Metadata = styled.div`
  display: flex;
  align-items: center;
`;

const Excerpt = styled.p`
  font-style: italic;
`;

const Timestamp = styled.time`
  margin-left: 16px;
`;

interface Props {
  post: App.BlogPost & { author: App.TeamMember | null };
}

const BlogTemplatePage: React.FC<Props> = function(props) {
  const { post } = props;
  const { data, content, author } = post;
  const { title, excerpt, published_at } = data;

  return (
    <Layout>
      <SEO title={title} />
      <Wrapper>
        <LargeTitle>{title}</LargeTitle>
        <Excerpt>{excerpt}</Excerpt>
        <Metadata>
          {author !== null && <BlogAuthor author={author} />}
          <Timestamp dateTime={published_at}>
            {moment(published_at).fromNow()}
          </Timestamp>
        </Metadata>
        <MDX components={mdxComponents}>{content}</MDX>
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

  const teamMembers = readTeamMembers();
  const teamMembersKeyed = keyBy(teamMembers, 'name');

  return {
    props: {
      post: {
        //@ts-ignore
        data: parsedData.data as App.BlogPost['data'],
        content: parsedData.content,
        author: teamMembersKeyed[parsedData.data.author],
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
