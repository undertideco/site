import React from 'react';

import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Layout from '../components/layout';
import SEO from '../components/seo';
import LargeTitle from '../components/large-title';
import BodyText from '../components/body-text';

import Project from '../components/project';

const Wrapper = styled.div`
  padding: 0;
  padding: 0.5rem 1.5rem;

  ${breakpoint('desktop')`
      padding: .5rem 3rem;
  `}
`;

const ProjectGrid = styled.div`
  margin: 26px 0px 64px 0px;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 45px 0px;
  align-items: flex-start;
  grid-row-gap: unset;
`;

const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects" />
    <Wrapper>
      <LargeTitle>Our Projects</LargeTitle>
      <BodyText>
        Here are some of the projects we have worked on over the years that we
        are really proud of.
      </BodyText>
      <ProjectGrid>
        <Project
          bannerFileName="bside-city"
          title="B-side"
          url="https://b-side.city"
          owner="in the wild"
          tech="Wordpress"
        />
        <Project
          bannerFileName="inwords"
          title="Inwords"
          url="https://inwords.ai"
          owner="Symbiose Technologies"
          tech="iOS"
        />
        <Project
          bannerFileName="doppler"
          title="Doppler WiFi Transfer"
          url="https://brushedtype.co/doppler"
          owner="Brushed Type"
          tech="iOS"
        />
        <Project
          bannerFileName="trill"
          title="Trill Project - Find Your Supportive Community"
          url="https://trillproject.com"
          owner="Trill Project"
          tech="Android, Node"
        />
        <Project
          bannerFileName="itw_mockup"
          title="In The Wild Landing Site"
          url="https://www.weareinthewild.com"
          owner="in the wild"
          tech="Web Design, Webflow"
        />
        <Project
          bannerFileName="our-shared-stories"
          title="Our Shared Stories"
          url="https://www.nlb.gov.sg/Portals/0/Reports/fy17/"
          owner="National Library Board (in partnership with In The Wild)"
          tech="Web Design, Webflow"
        />
        <Project
          bannerFileName="harmany"
          title="Harmany - Music Sharing Made Easy"
          url="https://harmany.me"
          owner="Undertide Apps"
          tech="iOS, Go"
        />
        <Project
          bannerFileName="nextbus-android"
          title="NextBus Android"
          owner="SG NextBus"
          tech="Android, Design"
        />
        <Project
          bannerFileName="nextbus-web"
          title="NextBus Web"
          owner="SG NextBus"
          tech="Web Design, React"
        />
        <Project
          bannerFileName="open-event-ios"
          title="Open Event iOS"
          owner="FOSSAsia"
          tech="iOS, Design"
        />
        <Project
          bannerFileName="nebulo"
          title="Nebulo - Beautiful Smog Reports"
          url="https://nebulo.undertide.co"
          owner="Undertide Apps"
          tech="iOS, Android, Node, Go"
        />
      </ProjectGrid>
    </Wrapper>
  </Layout>
);

export default ProjectsPage;
