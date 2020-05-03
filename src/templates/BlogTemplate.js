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
};

function BlogTemplate(props) {
  const {
    data: { mdx },
  } = props;

  const { title, author, date, image } = mdx.frontmatter;

  const {
    childImageSharp: { fluid },
  } = image;

  return (
    <Layout>
      <SEO title={title} />
      <Wrapper>
        {image && <Image fluid={fluid} />}
        <Title>{title}</Title>
        <Metadata>
          Posted on X by&nbsp;
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
    mdx: PropTypes.shape({
      id: PropTypes.string,
      body: PropTypes.func,
      frontmatter: PropTypes.shape({
        title: PropTypes.string,
        date: PropTypes.string,
        author: PropTypes.string,
        image: PropTypes.shape({
          fluid: PropTypes.shape(),
        }),
      }),
    }),
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