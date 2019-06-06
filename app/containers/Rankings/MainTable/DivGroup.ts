import styled from 'styles/styled-components';

interface Props {
  vertical?: boolean;
  centered?: boolean;
}
const DivGroup = styled<Props, 'div'>('div')`
  display: flex;
  flex-direction: ${props => (props.vertical ? 'column' : 'row')};
  justify-content: ${props => (props.centered ? 'center' : 'flex-start')};
  align-items: ${props => (props.vertical ? 'flex-start' : 'center')};
  text-align: left;

  & div {
    margin-right: 8px;
  }

  & a {
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default DivGroup;
