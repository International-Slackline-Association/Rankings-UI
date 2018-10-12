import * as React from 'react';
import SideBoxWrapper from './SideBoxWrapper';
import styled from 'styles/styled-components';
import ModalWrapper from './ModalWrapper';
import InfoBoxAthlete, { AthleteProps } from './Athlete';
import InfoBoxContest, { ContestProps } from './Contest';
import InfoBoxContests, { ContestsProps } from './Contests';
import InfoBoxRankings, { RankingsProps } from './Rankings';

export class SideInfoBoxAthlete extends React.PureComponent<AthleteProps> {
  public render() {
    return (
      <SideBoxWrapper>
        <InfoBoxAthlete {...this.props} />
      </SideBoxWrapper>
    );
  }
}

// tslint:disable-next-line:max-classes-per-file
export class SideInfoBoxContest extends React.PureComponent<ContestProps> {
  public render() {
    return (
      <SideBoxWrapper>
        <InfoBoxContest {...this.props} />
      </SideBoxWrapper>
    );
  }
}

// tslint:disable-next-line:max-classes-per-file
export class SideInfoBoxContests extends React.PureComponent<ContestsProps> {
  public render() {
    return (
      <SideBoxWrapper>
        <InfoBoxContests {...this.props} />
      </SideBoxWrapper>
    );
  }
}

// tslint:disable-next-line:max-classes-per-file
export class SideInfoBoxRankings extends React.PureComponent<RankingsProps> {
  public render() {
    return (
      <SideBoxWrapper>
        <InfoBoxRankings {...this.props} />
      </SideBoxWrapper>
    );
  }
}

// tslint:disable-next-line:max-classes-per-file
export class ModalInfoBoxAthlete extends React.PureComponent<AthleteProps> {
  public render() {
    return (
      <ModalWrapper>
        <InfoBoxAthlete {...this.props} />
      </ModalWrapper>
    );
  }
}

// tslint:disable-next-line:max-classes-per-file
export class ModalInfoBoxContest extends React.PureComponent<ContestProps> {
  public render() {
    return (
      <ModalWrapper>
        <InfoBoxContest {...this.props} />
      </ModalWrapper>
    );
  }
}

// tslint:disable-next-line:max-classes-per-file
export class ModalInfoBoxContests extends React.PureComponent<ContestsProps> {
  public render() {
    return (
      <ModalWrapper>
        <InfoBoxContests {...this.props} />
      </ModalWrapper>
    );
  }
}

// tslint:disable-next-line:max-classes-per-file
export class ModalInfoBoxRankings extends React.PureComponent<RankingsProps> {
  public render() {
    return (
      <ModalWrapper>
        <InfoBoxRankings {...this.props} />
      </ModalWrapper>
    );
  }
}



export const HalfDiv = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const FullDiv = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const PhotoSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: 80%;
`;

export const Img = styled.img`
  flex: none;
  max-width: 50%;
  border: 1px solid ${props => props.theme.appBackground};
`;
