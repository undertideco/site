import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import logo from '../images/logo.png';
import Button from './button';
import StyledAnchor from './styled-anchor';

const Wrapper = styled.header`
  margin: 32px 21px 0px 21px;

  ${breakpoint('desktop')`
    //margin: 41px 39px 0px 39px;
  `}

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 50px;
`;

const Menu = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 20px;
  align-items: center;
`;

const MenuLink = styled(Link)`
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

  ${breakpoint('desktop')`
    display: inline-block;
  `}
`;

const HireUsText = styled.span`
  text-decoration-color: #f59369;
  color: #f59369;
  ${breakpoint('desktop')`
    display: none;
  `}
`;

const Header = ({ siteTitle }) => (
  <Wrapper>
    <Logo src={logo} alt="Logo of Undertide" />
    <Menu>
      <MenuLink to="/">Home</MenuLink>
      <MenuLink to="/projects">Work</MenuLink>
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
