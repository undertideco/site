import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import { breakpoint } from 'styled-components-breakpoint';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  margin-bottom: 24px;
`;

const ProjectImageWrapper = styled.div`
  position: relative;
  height: 250px;

  ${breakpoint('desktop')`
    height: 300px;
  `}
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

const ProjectImage = styled(Image)`
  width: 100%;
  object-fit: cover;
`;

interface Props {
  bannerFileName: string;
  owner: string;
  tech: string;
  title: string;
  url?: string;
}

const Project: React.FC<Props> = function (props) {
  const { title, url, owner, tech, bannerFileName } = props;

  return (
    <Wrapper>
      <ProjectImageWrapper>
        <ProjectImage
          layout="fill"
          sizes="(max-width: 800px) 384px, (max-width: 900px) 640px, (max-width: 1200px) 384px, (min-width: 1200px) 640px"
          src={`/images/projects/${bannerFileName}`}
        />
      </ProjectImageWrapper>
      <ProjectTitleContainer href={url}>
        <ProjectTitle>{title}</ProjectTitle>
      </ProjectTitleContainer>
      <ProjectDetail>{owner}</ProjectDetail>
      <ProjectDetail>{tech}</ProjectDetail>
    </Wrapper>
  );
};

export default Project;
