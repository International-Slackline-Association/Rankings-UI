import * as React from 'react';

import styled from 'styles/styled-components';
import clearIconSvg = require('./clear.svg');

const SelectedFilterButton: React.SFC<{}> = () => {
  return (
    <Wrapper>
      <Text>12412314 sadd</Text>
      <ClearButton />
    </Wrapper>
  );
};

const ClearButtonWrapper = styled.button`
  background: transparent;
  padding: 0;
  /* margin: 0 0 0 0px; */
  display: block;
  width: 24px;
  height: 24px;
  border: none;
  outline: none;
  cursor: pointer;

  &:hover {
    img {
      opacity: 0.8;
    }
  }

  &:active {
    img {
      opacity: 0.4;
    }
  }

  &:focus {
    outline: none;
  }
`;

const ClearIcon = props => {
  return <img src={clearIconSvg as any} />;
};

const ClearButton = props => (
  <ClearButtonWrapper onClick={props.onClick}>
    <ClearIcon />
  </ClearButtonWrapper>
);

const Wrapper = styled.div`
  background-color: ${props => props.theme.appBackground};
  margin-right: 8px;
  min-width: 5%;
  /* max-height: 25px; */
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  border: 1px solid ${props => props.theme.border};
  border-radius: 1em;
  /* box-shadow: 0px 0px 8px 0px ${props => props.theme.border}}; */
`;

const Text = styled.div`
  padding-left: 8px;
  padding-right: 0px;
  color: ${props => props.theme.textPrimary};
  /* min-width: 10%; */
`;

export default SelectedFilterButton;
