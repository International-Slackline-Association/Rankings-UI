import * as React from 'react';
import styled from 'styles/styled-components';
import silhoutte from './silhoutte.svg?file';

interface Props extends WrapperProps {
  imageUrl: string;
}
interface WrapperProps {
  size?: 'small' | 'big';
}

function ProfileAvatar(props: Props) {
  const size = props.size || 'small';
  return (
    <Wrapper size={size}>
      <img
        src={props.imageUrl}
        // tslint:disable-next-line:jsx-no-lambda
        onError={(e: any) => {
          e.target.onerror = null;
          e.target.style = 'display: none';
        }}
      />
    </Wrapper>
  );
}
const Wrapper = styled<WrapperProps, 'div'>('div')`
  & img {
    flex: none;
    height: 100%;
    width: 100%;
  }
  display: flex;
  justify-content: center;
  width: ${props => (props.size === 'small' ? '30px' : '120px')};
  height: ${props => (props.size === 'small' ? '30px' : '120px')};
  flex: none;
  overflow: hidden;
  border-radius: 50%;
  background-size: contain;
  background-position: center;
  background-color: transparent;
  background-image: url(${silhoutte});
`;
export default ProfileAvatar;
