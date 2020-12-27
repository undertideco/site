import React from 'react';
import styled from 'styled-components';
import { useLocation } from '@reach/router';
import { breakpoint } from 'styled-components-breakpoint';
import Button from './button';
import StyledAnchor from './styled-anchor';

const Wrapper = styled.footer`
  display: grid;
  grid-auto-flow: row;
  grid-row-gap: 16px;

  background-color: #0c2741;
  color: white;
  padding: 46px 21px;

  ${breakpoint('tablet')`
    justify-items: center;
  `}
`;

const Title = styled.span`
  font-size: 28px;
  font-weight: 700;
  color: #f2fcfb;
`;

const Tagline = styled.span`
  font-size: 22px;
  color: #f2fcfb;

  ${breakpoint('tablet')`
    font-size: 28px;
  `}

  a {
    color: #f2fcfb;

    &:hover {
      text-decoration: none;
    }
  }
`;

const Underline = styled.span`
  text-decoration: underline;
`;

function Footer() {
  const location = useLocation();
  const isProjectsPage = location.pathname === '/projects';

  return (
    <Wrapper>
      <Title>
        {isProjectsPage
          ? 'Curious how we made these?'
          : 'Now that we have introduced ourselves...'}
      </Title>
      {!isProjectsPage && (
        <Tagline>
          Let us hear more about&nbsp;
          <Underline>you</Underline>!
        </Tagline>
      )}
      <StyledAnchor href="mailto:hello@undertide.co">
        <Button>Build something together</Button>
      </StyledAnchor>
    </Wrapper>
  );
}

export default Footer;
