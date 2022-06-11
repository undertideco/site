import moment from 'moment';
import React from 'react';
import styled from 'styled-components';

import BlogAuthor from './BlogAuthor';

const Title = styled.h1`
  margin: 0;
`;

const Wrapper = styled.div`
  padding: 16px 0;
  color: #0c2741;

  &:hover {
    ${Title} {
      text-decoration: underline;
    }
  }
`;

const Excerpt = styled.p``;

const Metadata = styled.div`
  display: flex;
  align-items: center;
`;

const Timestamp = styled.time`
  margin-left: 16px;
`;

interface Props {
  post: App.BlogPost & { author: App.TeamMember | null };
}

const BlogPostBlock: React.FC<Props> = function (props) {
  const { post } = props;
  const { data, author } = post;
  const { title, published_at, excerpt } = data;

  return (
    <Wrapper>
      <Title>{title}</Title>
      <Excerpt>{excerpt}</Excerpt>
      <Metadata>
        {author !== null && <BlogAuthor author={author} />}
        <Timestamp dateTime={published_at}>
          {moment(published_at).fromNow()}
        </Timestamp>
      </Metadata>
    </Wrapper>
  );
};

export default BlogPostBlock;
