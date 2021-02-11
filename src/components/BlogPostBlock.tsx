import moment from 'moment';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  border: 1px solid #000;
  padding: 16px;
`;

const Title = styled.h1``;

const Excerpt = styled.p``;

const Author = styled.span``;

const Timestamp = styled.time``;

interface Props {
  post: App.BlogPost;
}

const BlogPostBlock: React.FC<Props> = function(props) {
  const { post } = props;
  const { data } = post;
  const { title, published_at, excerpt, author } = data;

  return (
    <Wrapper>
      <Title>{title}</Title>
      <Excerpt>{excerpt}</Excerpt>
      <Author>{author}</Author>
      <Timestamp dateTime={published_at}>
        {moment(published_at).fromNow()}
      </Timestamp>
    </Wrapper>
  );
};

export default BlogPostBlock;
