import * as React from 'react';
import PointScore from './misc/PointScoreIcon';
import TopScore from './misc/TopScoreIcon';
import styled from 'styles/styled-components';

interface WorldIconProps {
  readonly value: string;
}

/* tslint:disable:max-line-length */
class WorldIcon extends React.PureComponent<WorldIconProps> {
  public render() {
    const value = this.props.value;
    return <Wrapper>{renderSwitch(value)}</Wrapper>;
  }
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

export default WorldIcon;
