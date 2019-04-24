import * as React from 'react';
import styled from 'styles/styled-components';
import ReactCountryFlag from 'react-country-flag';

interface Props {
  code: string;
  small?: boolean;
}

function CountryAvatar(props: Props) {
  return (
    <Wrapper small={props.small}>
      <ReactCountryFlag
        styleProps={{
          width: props.small ? '15px' : '25px',
          height: props.small ? '15px' : '25px',
          backgroundSize: 'cover',
        }}
        code={props.code}
        svg
      />
    </Wrapper>
  );
}
interface WrapperProps {
  small?: boolean;
}
const Wrapper = styled<WrapperProps, 'div'>('div')`
  display: flex;
  align-items: center;
  width: ${props => (props.small ? '15px' : '25px')};
  height: ${props => (props.small ? '15px' : '25px')};
  flex: none;
  overflow: hidden;
  border-radius: 50%;
  background-size: 100%;
`;
export default CountryAvatar;
