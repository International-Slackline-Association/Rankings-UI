import * as React from 'react';
import styled, { colors } from 'styles/styled-components';
import isaLogo from './isaLogo.svg?file';

interface Props {
  imageUrl: string;
}

function ContestAvatar(props: Props) {
  return (
    <Wrapper>
      <img src={props.imageUrl} />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  & img {
    flex: none;
    max-height: 100%;
    max-width: 100%;
  }
  display: flex;
  width: 30px;
  height: 30px;
  overflow: hidden;
  border-radius: 30px;
  background-image: url(${isaLogo});
  background-size: contain;
  background-position: center;
  background-color: black;
`;

export default ContestAvatar;
