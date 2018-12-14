import styled from 'styles/styled-components';
import media from 'styles/media';

interface Props {
  alignLeft?: boolean;
}
const Group = styled<Props, 'span'>('span')`
  display: flex;
  justify-content: ${props => (props.alignLeft ? 'flex-start' : 'center')};
  align-items: center;
  text-align: left;
  ${media.desktop`
    /* padding-left: 1em; */
  `};
  div {
    margin-right: 8px;
  }
`;

export default Group;
