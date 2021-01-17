import Link from 'next/link';
import React from 'react';
import ReactTyped from 'react-typed';
import styled from 'styled-components';
import { breakpoint } from 'styled-components-breakpoint';

import BodyText from '../components/body-text';
import Button from '../components/button';
import LargeTitle from '../components/large-title';
import Layout from '../components/Layout';
import LineBreak from '../components/line-break';
import SEO from '../components/seo';
import Skill, {
  SkillIcon,
  SkillList,
  SkillTitle,
  Tech,
} from '../components/skill';
import SkillGrid from '../components/skill-grid';
import StyledLink from '../components/styled-link';
import games from '../images/games.svg';
import mobile from '../images/mobile.svg';
import webdev from '../images/webdev.svg';

const Hero = styled.div`
  padding: 32px 21px 32px 21px;
  display: flex;
  flex-direction: column;
  align-items: start;

  ${breakpoint('tablet')`
      padding: .5rem 3rem .5rem 3rem;
  `}
`;

const StyledLargeTitle = styled(LargeTitle)`
  color: #0c2741;
`;

const SeeOurWorkButton = styled(Button)`
  background-color: #5286c7;

  &:hover {
    background-color: #4d7fbd;
  }
`;

const SkillsContainer = styled.div`
  background-color: white;
  box-shadow: 8px 4px 4px 0 rgba(0, 0, 0, 0.1);
  margin: 32px 0px;
  padding: 32px 21px 32px 21px;

  ${breakpoint('tablet')`
    margin: 64px 0;
    padding: 3rem;
  `}
`;

const SkillsTagline = styled.span`
  font-size: 40px;
  font-weight: 700;
  color: #1f3040;

  ${breakpoint('tablet')`
font-size: 52px;
        max-width: 639px;
  `}
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero>
      <StyledLargeTitle>
        Make your ideas&nbsp;
        <LineBreak desktop tablet />
        a&nbsp;
        <LineBreak mobile />
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
      <StyledLink href="/projects">
        <SeeOurWorkButton>See our work</SeeOurWorkButton>
      </StyledLink>
    </Hero>
    <SkillsContainer>
      <SkillsTagline>A team with the skills you need.</SkillsTagline>
      <BodyText>
        Regardless of your size, we have our technical resources ready for you.
      </BodyText>
      <SkillGrid>
        <Skill>
          <SkillIcon src={webdev} alt="" />
          <SkillTitle textColor="#1b929b">Web Development</SkillTitle>
          <SkillList>
            <Tech>Node</Tech>
            <Tech>Ruby on Rails</Tech>
            <Tech>React</Tech>
            <Tech>Go</Tech>
          </SkillList>
        </Skill>
        <Skill>
          <SkillIcon src={games} alt="" />
          <SkillTitle textColor="#c23230">Games</SkillTitle>
          <SkillList>
            <Tech>Unity Development</Tech>
            <Tech>SpriteKit</Tech>
            <Tech>3D Modelling</Tech>
            <Tech>Augmented & Virtual Reality</Tech>
          </SkillList>
        </Skill>
        <Skill>
          <SkillIcon src={mobile} alt="" />
          <SkillTitle textColor="#4298CC">Mobile</SkillTitle>
          <SkillList>
            <Tech>iOS</Tech>
            <Tech>Android</Tech>
            <Tech>React Native</Tech>
          </SkillList>
        </Skill>
      </SkillGrid>
    </SkillsContainer>
  </Layout>
);

export default IndexPage;
