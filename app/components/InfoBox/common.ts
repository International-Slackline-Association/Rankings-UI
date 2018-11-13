import styled from 'styles/styled-components';

interface IsaBackgroundProps {
  isBlur?: boolean;
}
export const IsaBackground = styled<IsaBackgroundProps, 'img'>('img')`
  position: absolute;
  align-self: center;
  z-index: 0;
  filter: ${props => props.isBlur ? 'blur(4px)' : 'none'};
`;
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
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: 80%;
`;

export const Img = styled.img`
  flex: none;
  z-index: 1;
  max-width: 50%;
  border: 1px solid ${props => props.theme.appBackground};
`;
