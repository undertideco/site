import React from 'react';
import { Link } from 'gatsby';

import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import ReactTyped from 'react-typed';
import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import LargeTitle from '../components/large-title';
import BodyText from '../components/body-text';
import LineBreak from '../components/line-break';
import Button from '../components/button';

const Hero = styled.div`
  padding: 0;

  ${breakpoint('desktop')`
      padding: .5rem 3rem .5rem 3rem;
  `}
`;

const StyledLargeTitle = styled(LargeTitle)`
  color: #0c2741;
`;

const SeeOurWorkButton = styled(Button)`
  background-color: #5286c7;
  color: white;

  &:hover {
    cursor: pointer;
    background-color: #4d7fbd;
  }
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero>
      <StyledLargeTitle>
        Make your ideas&nbsp;
        <LineBreak desktop />
        a&nbsp;
        <LineBreak mobile tablet />
        <ReactTyped
          strings={['reality.', 'success.', 'delight.']}
          typeSpeed={40}
          backDelay={3000}
          cursorChar="_"
          backSpeed={80}
          contentType={null}
          loop
        />
      </StyledLargeTitle>
      <BodyText>
        Software has become common sense. To retain and grow your customer base
        in a world full of options, a sound business plan is not enough.
      </BodyText>
      <BodyText>
        We started Undertide in 2013 to build websites and apps to sweep our
        users off their feet. Since then, individuals and companies have
        approached us to do the same for their customers.
      </BodyText>
      <Link to="/projects">
        <SeeOurWorkButton>See our work</SeeOurWorkButton>
      </Link>
    </Hero>
  </Layout>
);

export default IndexPage;
