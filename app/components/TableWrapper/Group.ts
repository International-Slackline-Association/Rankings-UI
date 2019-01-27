import styled from 'styles/styled-components';

interface Props {
  alignLeft?: boolean;
}
const Group = styled<Props, 'span'>('span')`
  display: flex;
  justify-content: ${props => (props.alignLeft ? 'flex-start' : 'center')};
  align-items: center;
  text-align: left;

  div {
    margin-right: 8px;
  }

  & a {
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default Group;
