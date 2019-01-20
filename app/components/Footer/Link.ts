import styled from 'styles/styled-components';

interface OwnProps {}

const Link = styled.a`
  color: ${props => props.theme.textInverted};
  font-size: 1.2em;
  font-weight: bold;
  text-align: left;
  margin: 8px 16px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Info = styled.span`
  color: ${props => props.theme.textInverted};
  font-size: 1em;
  /* font-weight: bold; */
  text-align: center;
  margin: 8px 16px;
  text-decoration: none;
`;
export { Info };
export default Link;
