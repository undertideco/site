import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const LargeTitle = styled.h1`
  font-size: 60px;
  font-weight: 700;
  line-height: 78px;
  color: #0c2741;
  margin-top: 32px;

  ${breakpoint('desktop')`
    font-size: 80px;
    line-height: 95px;
  `}
`;

export default LargeTitle;
