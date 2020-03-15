import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import breakpoint from 'styled-components-breakpoint';

const LineBreak = styled.br`
  ${breakpoint('mobile')`
    ${props =>
      props.mobile
        ? css`
            display: block;
          `
        : css`
            display: none;
          `}
  `}

${breakpoint('tablet')`
    ${props =>
      props.tablet
        ? css`
            display: block;
          `
        : css`
            display: none;
          `}
  `}

${breakpoint('desktop')`
    ${props =>
      props.desktop
        ? css`
            display: block;
          `
        : css`
            display: none;
          `}
  `}
`;

LineBreak.defaultProps = {
  mobile: false,
  tablet: false,
  desktop: false,
};

LineBreak.propTypes = {
  mobile: PropTypes.bool,
  tablet: PropTypes.bool,
  desktop: PropTypes.bool,
};

export default LineBreak;
