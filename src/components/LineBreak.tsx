import styled, { css } from 'styled-components';

interface LineBreakProps {
  $mobile: boolean;
  $tablet: boolean;
  $desktop: boolean;
}

const LineBreak = styled.br<LineBreakProps>`
  ${(props) =>
    props.$mobile
      ? css`
          display: block;
        `
      : css`
          display: none;
        `}

  @media screen and (min-width: 737px) {
    ${(props) =>
      props.$tablet
        ? css`
            display: block;
          `
        : css`
            display: none;
          `}
  }

  @media screen and (min-width: 1025px) {
    ${(props) =>
      props.$desktop
        ? css`
            display: block;
          `
        : css`
            display: none;
          `}
  }
`;

export default LineBreak;
