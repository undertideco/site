import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const Skill = styled.div`
  display: grid;
  grid-template-areas:
    'icon title'
    'nada list';
  grid-template-columns: 31px 1fr;
  grid-row-gap: 5px;
  grid-column-gap: 8px;
  align-items: center;

  ${breakpoint('desktop')`
   grid-row-gap: 8px;
  `}
`;

export const SkillIcon = styled.img``;

export const SkillTitle = styled.span`
  grid-area: title;
  font-size: 1em;
  font-weight: 700;
  text-transform: uppercase;
  color: ${props => props.textColor};

  ${breakpoint('desktop')`
    font-size: 16px;
  `}
`;

export const SkillList = styled.ul`
  grid-area: list;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Tech = styled.li`
  color: #737272;
  font-size: 1em;
  line-height: 1.7em;

  ${breakpoint('desktop')`
    font-size: 16px;
    line-height: 175%;
  `}
`;

export default Skill;
