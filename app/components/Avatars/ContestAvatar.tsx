import * as React from 'react';
import styled from 'styles/styled-components';
import isaLogo from './isaLogo.svg?file';

interface Props extends WrapperProps {
  imageUrl: string;
}

interface WrapperProps {
  size?: 'small' | 'big';
}

function ContestAvatar(props: Props) {
  const size = props.size || 'small';
  return (
    <Wrapper size={size}>
      <img
        src={props.imageUrl} // tslint:disable-next-line:jsx-no-lambda
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
    background-color: transparent;
  }
  display: flex;
  justify-content: center;
  width: ${props => (props.size === 'small' ? '30px' : '120px')};
  height: ${props => (props.size === 'small' ? '30px' : '120px')};
  overflow: hidden;
  border-radius: 50%;
  background-image: url(${isaLogo});
  background-size: contain;
  background-position: center;
  background-color: black;
`;

export default ContestAvatar;
