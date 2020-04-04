import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const BodyText = styled.p`
  font-size: 1em;
  line-height: 1.5em;
  color: #5f6b7a;
  font-weight: 300;

  ${breakpoint('tablet')`
    font-size: 1.25em;
    line-height: 1.5;
    max-width: 671px;
  `}
`;

export default BodyText;
