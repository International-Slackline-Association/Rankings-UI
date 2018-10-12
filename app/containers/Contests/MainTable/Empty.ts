import styled from 'styles/styled-components';

const Empty = styled.div`
  position: relative;
  min-height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: normal;
  color: ${props => props.theme.textSecondary};
  padding: 0 24px;
  text-align: center;
`;

export default Empty;
