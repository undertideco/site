import styled from 'styled-components';
import { breakpoint } from 'styled-components-breakpoint';

const LargeTitle = styled.h1`
  font-size: 60px;
  font-weight: 700;
  line-height: 1.3;
  color: #0c2741;
  margin-top: 0;
  margin-bottom: 0;

  ${breakpoint('tablet')`
  margin-top: 32px;
    font-size: 80px;
    line-height: 1.2;
  `}
`;

export default LargeTitle;
