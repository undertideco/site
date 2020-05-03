import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';
import GatsbyImage from 'gatsby-image';

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

  const {
    childImageSharp: { fluid },
  } = image;

  return (
    <Wrapper to={slug}>
      {image && <GatsbyImage fluid={fluid} />}
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Wrapper>
  );
}

BlogPostBlock.propTypes = {
  node: PropTypes.shape({
    frontmatter: PropTypes.shape({
      date: PropTypes.string,
      description: PropTypes.string,
      author: PropTypes.string,
      title: PropTypes.string,
    }),
    fields: PropTypes.shape({
      slug: PropTypes.string,
    }),
  }).isRequired,
};

export default BlogPostBlock;
