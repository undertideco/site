import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { useStaticQuery, graphql } from 'gatsby';
import GatsbyImage from 'gatsby-image';
import { find } from 'lodash';

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

const ProjectBanner = styled(GatsbyImage)`
  object-fit: cover;
  width: 100%;
  margin-bottom: 8px;
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
  const { allFile } = useStaticQuery(
    graphql`
      {
        allFile(filter: { sourceInstanceName: { eq: "projectImages" } }) {
          nodes {
            name
            childImageSharp {
              fluid(quality: 90) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    `
  );

  const file = find(allFile.nodes, node => node.name === bannerFileName);

  const { fluid } = file ? file.childImageSharp : { fluid: null };

  return (
    <Wrapper>
      {fluid && <ProjectBanner fluid={fluid} />}
      <a href={url}>
        <ProjectTitle>{title}</ProjectTitle>
      </a>
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
