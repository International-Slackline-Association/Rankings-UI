import * as React from 'react';
import styled from 'styles/styled-components';
// import silhoutte from './silhoutte.svg?file';
import ReactCountryFlag from 'react-country-flag';

interface Props {
  code: string;
}

function CountryAvatar(props: Props) {
  return (
    <Wrapper>
      <ReactCountryFlag
        styleProps={{
          width: '25px',
          height: '25px',
          backgroundSize: 'cover',
        }}
        code={props.code}
        svg
      />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  & span {
    /* flex: 1; */
    /* max-height: 100%;
    max-width: 100%; */
  }
  display: flex;
  align-items: center;
  width: 25px;
  height: 25px;
  overflow: hidden;
  border-radius: 50%;
  background-size: 100%;
`;
export default CountryAvatar;
