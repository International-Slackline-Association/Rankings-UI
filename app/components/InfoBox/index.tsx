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

interface ModalProps {
  large?: boolean;
}
// tslint:disable-next-line:max-classes-per-file
export class ModalInfoBoxAthlete extends React.PureComponent<AthleteProps & ModalProps> {
  public render() {
    return (
      <ModalWrapper large={this.props.large}>
        <InfoBoxAthlete {...this.props} />
      </ModalWrapper>
    );
  }
}

// tslint:disable-next-line:max-classes-per-file
export class ModalInfoBoxContest extends React.PureComponent<ContestProps & ModalProps> {
  public render() {
    return (
      <ModalWrapper large={this.props.large}>
        <InfoBoxContest {...this.props} />
      </ModalWrapper>
    );
  }
}

// tslint:disable-next-line:max-classes-per-file
export class ModalInfoBoxContests extends React.PureComponent<ContestsProps & ModalProps> {
  public render() {
    return (
      <ModalWrapper large={this.props.large}>
        <InfoBoxContests {...this.props} />
      </ModalWrapper>
    );
  }
}

// tslint:disable-next-line:max-classes-per-file
export class ModalInfoBoxRankings extends React.PureComponent<RankingsProps & ModalProps> {
  public render() {
    return (
      <ModalWrapper large={this.props.large}>
        <InfoBoxRankings {...this.props} />
      </ModalWrapper>
    );
  }
}
