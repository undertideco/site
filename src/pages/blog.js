import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import BlogPostBlock from '../components/BlogPostBlock';
import LargeTitle from '../components/large-title';

const Wrapper = styled.div`
  padding: 32px 21px;

  ${breakpoint('tablet')`
      padding: .5rem 3rem;
  `}
`;

function Blog() {
  const { allMdx } = useStaticQuery(graphql`
    query {
      allMdx {
        edges {
          node {
            id
            frontmatter {
              title
              date
              description
              author
              image {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="Blog" />
      <Wrapper>
        <LargeTitle>Blog</LargeTitle>
        {allMdx.edges.map(({ node }) => (
          <BlogPostBlock key={node.id} node={node} />
        ))}
      </Wrapper>
    </Layout>
  );
}

export default Blog;
