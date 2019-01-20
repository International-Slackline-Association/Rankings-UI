import styled from 'styles/styled-components';
import ComponentBackground from 'components/ComponentBackground';

interface OwnProps {}

const Wrapper = styled(ComponentBackground)`
  && {
    background-color: ${props => props.theme.componentBackground};
  }
`;

export default Wrapper;
