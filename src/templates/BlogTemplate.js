import React from 'react';
import PropTypes from 'prop-types';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import GatsbyImage from 'gatsby-image';
import Layout from '../components/layout';
import SEO from '../components/seo';
import BodyText from '../components/body-text';
import StyledAnchor from '../components/styled-anchor';
import BlogPostPropType from '../prop-types/BlogPost';
import HighlightWrapper from '../components/HighlightWrapper';

const Wrapper = styled.div`
  padding: 32px 21px;

  ${breakpoint('tablet')`
      padding: .5rem 3rem;
  `}
`;

const Title = styled.h1``;

const Metadata = styled.span``;

const Author = styled.span`
  color: green;
`;

const Image = styled(GatsbyImage)`
  width: 200px;
  height: 200px;
`;

const components = {
  p: BodyText,
  a: StyledAnchor,
  pre: HighlightWrapper,
};

function BlogTemplate(props) {
  const {
    data: { mdx },
  } = props;

  const { title, author, date, image } = mdx.frontmatter;

  return (
    <Layout>
      <SEO title={title} />
      <Wrapper>
        {image && <Image fluid={image?.childImageSharp?.fluid} />}
        <Title>{title}</Title>
        <Metadata>
          Posted on&nbsp;
          {new Date(date).toLocaleDateString()}
          &nbsp;by&nbsp;
          <Author>{author}</Author>
        </Metadata>
        <MDXProvider components={components}>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </MDXProvider>
      </Wrapper>
    </Layout>
  );
}

BlogTemplate.propTypes = {
  data: PropTypes.shape({
    mdx: BlogPostPropType,
  }).isRequired,
};

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        date
        author
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;

export default BlogTemplate;
