import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 8px;
`;

const Name = styled.span`
  font-weight: 700;
`;

interface Props {
  author: App.TeamMember;
}

const BlogAuthor: React.FC<Props> = function (props) {
  const { author } = props;
  const { name, avatar } = author;

  return (
    <Wrapper>
      <Avatar src={avatar} />
      <Name>{name}</Name>
    </Wrapper>
  );
};

export default BlogAuthor;
