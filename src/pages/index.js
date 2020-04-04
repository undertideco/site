import React from 'react';
import { Link } from 'gatsby';

import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import ReactTyped from 'react-typed';
import Layout from '../components/layout';
import SEO from '../components/seo';
import LargeTitle from '../components/large-title';
import BodyText from '../components/body-text';
import LineBreak from '../components/line-break';
import Button from '../components/button';
import SkillGrid from '../components/skill-grid';
import Skill, {
  SkillIcon,
  SkillList,
  Tech,
  SkillTitle,
} from '../components/skill';
import webdev from '../images/webdev.svg';
import games from '../images/games.svg';
import mobile from '../images/mobile.svg';
import StyledLink from '../components/styled-link';

const Hero = styled.div`
  padding: 32px 3rem 32px 3rem;
  display: flex;
  flex-direction: column;
  align-items: start;

  ${breakpoint('desktop')`
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
  margin: 64px 0;
  padding: 3rem;
`;

const SkillsTagline = styled.span`
  font-size: 52px;
  font-weight: 700;
  color: #1f3040;

  ${breakpoint('desktop')`
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
      <StyledLink to="/projects">
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
