import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import GatsbyImage from 'gatsby-image';

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'avatar name'
    'avatar bio';
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  column-gap: 16px;
  row-gap: 16px;
`;

const Avatar = styled(GatsbyImage)`
  grid-area: avatar;
  width: 150px;
  height: 150px;
`;
const Name = styled.h3`
  margin: 0;
  grid-area: name;
  font-size: 1.2em;
  font-weight: 600;
  color: #0c2741;
`;
const Bio = styled.span`
  grid-area: bio;
  color: #5f6b7a;
`;

function TeamMember(props) {
  const {
    member: { name, bio, avatar },
  } = props;

  return (
    <Wrapper>
      <Avatar fluid={avatar.childImageSharp.fluid} />
      <Name>{name}</Name>
      <Bio>{bio}</Bio>
    </Wrapper>
  );
}

TeamMember.propTypes = {
  member: PropTypes.shape({
    name: PropTypes.string,
    bio: PropTypes.string,
    avatar: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fluid: PropTypes.shape(),
      }),
    }),
  }).isRequired,
};

export default TeamMember;
