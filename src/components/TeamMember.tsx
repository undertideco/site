import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import { breakpoint } from 'styled-components-breakpoint';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
`;

const AvatarWrapper = styled.div`
  position: relative;
  width: 100px;
  height: 100px;

  ${breakpoint('desktop')`
    width: 150px;
    height: 150px;
  `}
  border-radius: 10px;
  margin-bottom: 1rem;
`;

const ProfileImage = styled(Image)`
  width: 100%;
  object-fit: cover;
`;

const Name = styled.h3`
  margin: 0;
  font-size: 1.2em;
  font-weight: 600;
  color: #0c2741;
  margin-bottom: 0.5rem;
`;
const Bio = styled.span`
  color: #5f6b7a;
  line-height: 1.3;
`;

interface Props {
  member: App.TeamMember;
}

const TeamMember: React.FC<Props> = function (props) {
  const { member } = props;

  const { name, bio, avatar, social } = member;

  return (
    <Wrapper>
      <AvatarWrapper>
        <ProfileImage
          layout="fill"
          sizes="(max-width: 750px) 384px, (max-width: 1200px) 128px, (min-width: 1200px) 384px"
          src={avatar}
        />
      </AvatarWrapper>
      <Name>{name}</Name>
      <Bio>{bio}</Bio>
    </Wrapper>
  );
};

export default TeamMember;
