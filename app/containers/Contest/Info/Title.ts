import styled from 'styles/styled-components';

const Title = styled.span`
  font-weight: bold;
  font-size: 1.5em;
  text-align: center;
  color: ${props => props.theme.textInverted};
  margin-top: 24px;
`;

export default Title;
