import React from 'react';
import styled from 'styled-components';
import { breakpoint } from 'styled-components-breakpoint';

import BodyText from '../components/body-text';
import LargeTitle from '../components/large-title';
import Layout from '../components/layout';
import Project from '../components/project';
import SEO from '../components/seo';

const Wrapper = styled.div`
  padding: 32px 21px;

  ${breakpoint('tablet')`
      padding: .5rem 3rem;
  `}
`;

const ProjectGrid = styled.div`
  display: grid;
  column-gap: 24px;
  row-gap: 24px;

  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));

  ${breakpoint('desktop')`
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  `}
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
          bannerFileName="bside-city.jpg"
          title="B-side"
          url="https://b-side.city"
          owner="in the wild"
          tech="Wordpress"
        />
        <Project
          bannerFileName="inwords.jpg"
          title="Inwords"
          url="https://inwords.ai"
          owner="Symbiose Technologies"
          tech="iOS"
        />
        <Project
          bannerFileName="doppler.jpg"
          title="Doppler WiFi Transfer"
          url="https://brushedtype.co/doppler"
          owner="Brushed Type"
          tech="iOS"
        />
        <Project
          bannerFileName="trill.png"
          title="Trill Project - Find Your Supportive Community"
          url="https://trillproject.com"
          owner="Trill Project"
          tech="Android, Node"
        />
        <Project
          bannerFileName="itw_mockup.jpg"
          title="In The Wild Landing Site"
          url="https://www.weareinthewild.com"
          owner="in the wild"
          tech="Web Design, Webflow"
        />
        <Project
          bannerFileName="our-shared-stories.png"
          title="Our Shared Stories"
          url="https://www.nlb.gov.sg/Portals/0/Reports/fy17/"
          owner="National Library Board (in partnership with In The Wild)"
          tech="Web Design, Webflow"
        />
        <Project
          bannerFileName="harmany.png"
          title="Harmany - Music Sharing Made Easy"
          url="https://harmany.me"
          owner="Undertide Apps"
          tech="iOS, Go"
        />
        <Project
          bannerFileName="nextbus-android.png"
          title="NextBus Android"
          owner="SG NextBus"
          tech="Android, Design"
        />
        <Project
          bannerFileName="nextbus-web.png"
          title="NextBus Web"
          owner="SG NextBus"
          tech="Web Design, React"
        />
        <Project
          bannerFileName="open-event-ios.png"
          title="Open Event iOS"
          owner="FOSSAsia"
          tech="iOS, Design"
        />
        <Project
          bannerFileName="nebulo.png"
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
