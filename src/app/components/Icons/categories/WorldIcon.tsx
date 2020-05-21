import * as React from 'react';
import PointScore from './misc/PointScoreIcon';
import TopScore from './misc/TopScoreIcon';
import styled from 'styled-components/macro';

interface WorldIconProps {
  readonly value: string;
}

export function WorldIcon(props: WorldIconProps) {
  return <Wrapper>{renderSwitch(props.value)}</Wrapper>;
}

function renderSwitch(param: string) {
  switch (param) {
    case '1':
      return <TopScore />;
    case '2':
      return <PointScore />;
    default:
      return <div />;
  }
}

const Wrapper = styled.div`
  max-width: 30px;
  max-height: 30px;
  display: flex;
`;
