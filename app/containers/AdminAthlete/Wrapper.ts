import styled from 'styles/styled-components';
import ComponentBackground from 'components/ComponentBackground';

interface OwnProps {}

const Wrapper = styled(ComponentBackground)`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 32px;
`;



export default Wrapper;
