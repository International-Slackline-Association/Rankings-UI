import styled from 'styles/styled-components';
import media from 'styles/media';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
  ${media.desktop`
    flex-direction: row;
    width: 100vw;
    height: 100vh;
  `};
`;
