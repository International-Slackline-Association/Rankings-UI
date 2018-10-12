import styled from 'styles/styled-components';

export const HalfDiv = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const FullDiv = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const PhotoSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: 80%;
`;

export const Img = styled.img`
  flex: none;
  max-width: 50%;
  border: 1px solid ${props => props.theme.appBackground};
`;
