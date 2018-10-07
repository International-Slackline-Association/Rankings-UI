import * as React from 'react';

import styled from 'styles/styled-components';
import clearIconSvg = require('./clear.svg');

interface Props {
  id;
  name: string;
  isDisabled: boolean;
  onCancel: (id) => void;
}

const SelectedFilterButton: React.SFC<Props> = props => {
  function onCancel() {
    props.onCancel(props.id);
  }
  return (
    <Wrapper>
      <Text>{props.name}</Text>
      <ClearButton isDisabled={props.isDisabled} onClick={onCancel} />
    </Wrapper>
  );
};

const ClearButtonWrapper = styled.button`
  :disabled {
    opacity: 0.65;
    /* cursor: not-allowed; */
  }
  background: transparent;
  padding: 1px 22px 2px 7px;

  /* margin: 0 0 0 0px; */
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
  <ClearButtonWrapper disabled={props.isDisabled} onClick={props.onClick}>
    <ClearIcon />
  </ClearButtonWrapper>
);

const Wrapper = styled.div`
  background-color: #707682;
  /* height: 100%; */
  margin-right: 8px;
  margin-top: 8px;
  min-width: 5%;
  /* max-height: 25px; */
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  /* border: 1px solid ${props => props.theme.border}; */
  border-radius: 20px;
  /* box-shadow: 0px 0px 8px 0px ${props => props.theme.border}}; */
`;

const Text = styled.div`
  padding-left: 12px;
  padding-right: 0px;
  font-size: 0.9em;
  color: ${props => props.theme.textInverted};
  /* min-width: 10%; */
`;

export default SelectedFilterButton;
