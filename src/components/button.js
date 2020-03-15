import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  text-decoration: none;

  border-radius: 3px;
  font-weight: 700;

  background-color: #f59369;
  color: #fff;
  font-size: 16px;
  height: 51px;
  width: 297px;
  transition: background-color 0.15s ease-in-out, box-shadow 0.3s ease-in-out;

  margin: 0 auto;

  ${breakpoint('desktop')`
    margin: unset;
  `}

  &:hover {
    cursor: pointer;
    background-color: #e88b64;
  }
`;

export default Button;
