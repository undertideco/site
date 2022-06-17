import styled from 'styled-components';
import { breakpoint } from 'styled-components-breakpoint';

const SkillGrid = styled.div`
  display: grid;
  grid-template-areas:
    'mobile'
    'webdev'
    'games';
  grid-row-gap: 14px;

  ${breakpoint('tablet')`
    grid-template-areas:
      'webdev games'
      'mobile mobile';

      grid-row-gap: 32px;

  `};

  ${breakpoint('desktop')`
grid-template-areas:
          "webdev games"
          "mobile nada";
        grid-row-gap: 32px;
  `}
`;

export default SkillGrid;
