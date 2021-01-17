import { find } from 'lodash';
import Image from 'next/image';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { breakpoint } from 'styled-components-breakpoint';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  margin-bottom: 24px;

  flex-basis: 100%;

  ${breakpoint('tablet')`
    flex-basis: calc(50% - .5rem - .5rem);
  `}

  ${breakpoint('desktop')`
    flex-basis: calc(33% - .5rem - .5rem);
  `}
`;

const ProjectImageWrapper = styled.div`
  position: relative;
  width: 375px;
  height: 300px;
  overflow: hidden;
`;

const ProjectTitleContainer = styled.a`
  margin-top: 8px;
`;

const ProjectTitle = styled.span`
  font-size: 0.9em;
  font-weight: 700;
  color: #0c2741;
`;

const ProjectDetail = styled.span`
  color: rgba(15, 59, 87, 70%);
  font-size: 0.9em;
  line-height: 1.35em;
  margin-top: 2.5px;
`;

function Project(props) {
  const { title, url, owner, tech, bannerFileName } = props;

  return (
    <Wrapper>
      <ProjectImageWrapper>
        <Image
          src={`/images/projects/${bannerFileName}`}
          layout="fill"
          objectFit="cover"
        />
      </ProjectImageWrapper>
      <ProjectTitleContainer href={url}>
        <ProjectTitle>{title}</ProjectTitle>
      </ProjectTitleContainer>
      <ProjectDetail>{owner}</ProjectDetail>
      <ProjectDetail>{tech}</ProjectDetail>
    </Wrapper>
  );
}

Project.defaultProps = {
  url: null,
};

Project.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
  bannerFileName: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  tech: PropTypes.string.isRequired,
};

export default Project;
