import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Button from './button';
import StyledAnchor from './styled-anchor';

const Wrapper = styled.footer`
  display: grid;
  grid-auto-flow: row;
  grid-row-gap: 16px;

  background-color: #0c2741;
  color: white;
  padding: 46px 16px;

  ${breakpoint('desktop')`
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

  ${breakpoint('desktop')`
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
  return (
    <Wrapper>
      <Title>Now that we have introduced ourselves...</Title>
      <Tagline>
        Let us hear more about&nbsp;
        <Underline>you</Underline>
!
</Tagline>
      <StyledAnchor href="mailto:hello@undertide.co">
        <Button>Build something together</Button>
      </StyledAnchor>
    </Wrapper>
  );
}

export default Footer;
