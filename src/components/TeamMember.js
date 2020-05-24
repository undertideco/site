import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import GatsbyImage from 'gatsby-image';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
`;

const Avatar = styled(GatsbyImage)`
  width: 150px;
  height: 150px;
  border-radius: 10px;
  margin-bottom: 1rem;
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
