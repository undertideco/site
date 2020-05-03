import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import GatsbyImage from 'gatsby-image';
import BlogPostPropType from '../prop-types/BlogPost';

const Wrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid #888;
`;

const Title = styled.h1``;

const Description = styled.span``;

function BlogPostBlock(props) {
  const {
    node: {
      frontmatter: { title, description, image },
      fields: { slug },
    },
  } = props;

  return (
    <Wrapper to={slug}>
      {image && <GatsbyImage fluid={image?.childImageSharp?.fluid} />}
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Wrapper>
  );
}

BlogPostBlock.propTypes = {
  node: BlogPostPropType.isRequired,
};

export default BlogPostBlock;
