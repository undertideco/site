import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const LargeTitle = styled.h1`
  font-size: 80px;
  font-weight: 700;
  line-height: 1.2;
  color: #0c2741;
  margin-top: 32px;
  margin-bottom: 0;

  ${breakpoint('desktop')`
    font-size: 80px;
    line-height: 95px;
  `}
`;

export default LargeTitle;
