import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { breakpoint } from 'styled-components-breakpoint';

import Button from './button';
import StyledAnchor from './styled-anchor';
import StyledLink from './styled-link';

const Wrapper = styled.header`
  margin: 32px 21px 0px 21px;

  ${breakpoint('tablet')`
    margin: 32px 3rem 0px 3rem;
  `}

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoWrapper = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
`;

const Menu = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 20px;
  align-items: center;
`;

const MenuLink = styled(StyledLink)`
  font-size: 18px;
  color: #5f6b7a;
  text-align: left;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const WorkTogetherButton = styled(Button)`
  width: 207px;

  display: none;

  ${breakpoint('tablet')`
    display: inline-block;
  `}
`;

const HireUsText = styled.span`
  text-decoration-color: #f59369;
  color: #f59369;
  font-size: 18px;
  text-decoration: underline;

  ${breakpoint('tablet')`
    display: none;
  `}
`;

const MobileHidden = styled.span`
  display: none;
  ${breakpoint('tablet')`
  display: inline;
  `}
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;

const Header = () => (
  <Wrapper>
    <StyledLink href="/">
      <LogoWrapper>
        <Image src="/logo.png" alt="Logo of Undertide" />
      </LogoWrapper>
    </StyledLink>
    <Menu>
      <MenuLink href="/">Home</MenuLink>
      <MenuLink href="/projects">Work</MenuLink>
      <MenuLink href="/meet-the-team">
        <MobileHidden>Meet the</MobileHidden> Team
      </MenuLink>
      <MenuLink href="/blog">Blog</MenuLink>
      <StyledAnchor href="mailto:hello@undertide.co">
        <HireUsText>Hire Us</HireUsText>
        <WorkTogetherButton>Let&apos;s Work Together</WorkTogetherButton>
      </StyledAnchor>
    </Menu>
  </Wrapper>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
