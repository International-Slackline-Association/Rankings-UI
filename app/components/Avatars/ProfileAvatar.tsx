import * as React from 'react';
import styled from 'styles/styled-components';
import silhoutte from './silhoutte.svg?file';

interface Props {
  imageUrl: string;
}

function ProfileAvatar(props: Props) {
  return (
    <Wrapper>
      <img
        src={props.imageUrl}
      />
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
  background-image: url(${silhoutte});
  background-size: 100%;
`;
export default ProfileAvatar;
