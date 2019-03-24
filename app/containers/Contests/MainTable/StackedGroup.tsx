import styled from 'styles/styled-components';

interface OwnProps {}

export const StackedGroup = styled<OwnProps, 'span'>('span')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;

  & a {
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;


export default StackedGroup;
