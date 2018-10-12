import * as React from 'react';
import SideBoxWrapper from './SideBoxWrapper';
import styled from 'styles/styled-components';
import TitledField from './TitledField';
import SideBoxButton from '../SideBoxButton';
import ModalWrapper from './ModalWrapper';

interface Props {
  item: {
    id: string;
    name: string;
    surname: string;
    age: number;
    points: string;
    profileUrl: string;
    overallRank: number;
    topDisciplines: string[];
  };
}

export class SideInfoBoxAthlete extends React.PureComponent<Props> {
  public render() {
    return (
      <SideBoxWrapper>
        <InfoBoxAthlete {...this.props} />
      </SideBoxWrapper>
    );
  }
}

// tslint:disable-next-line:max-classes-per-file
export class ModalInfoBoxAthlete extends React.PureComponent<Props> {
  public render() {
    return (
      <ModalWrapper>
        <InfoBoxAthlete {...this.props} />
      </ModalWrapper>
    );
  }
}

// tslint:disable-next-line:max-classes-per-file
class InfoBoxAthlete extends React.PureComponent<Props> {
  public render() {
    const item = this.props.item;
    return (
      <React.Fragment>
        <PhotoSection>
          <Img src={item.profileUrl} />
        </PhotoSection>
        <NameSection>
          <HalfDiv>
            <TitledField title={'Name'} value={item.name} />
          </HalfDiv>
          <HalfDiv>
            <TitledField title={'Surname'} value={item.surname} />
          </HalfDiv>
        </NameSection>
        <StatsSection>
          <HalfDiv>
            <TitledField title={'Age'} value={item.age.toString()} />
          </HalfDiv>
          <HalfDiv>
            <TitledField title={'Overall Rank'} value={item.overallRank.toString()} />
          </HalfDiv>
        </StatsSection>
        <DisciplineSection>
          <FullDiv>
            <TitledField title={'Top Disciplines'} value={item.topDisciplines.join(', ')} />
          </FullDiv>
        </DisciplineSection>
        <ButtonSection>
          <FullDiv>
            <SideBoxButton>Contests</SideBoxButton>
          </FullDiv>
        </ButtonSection>
      </React.Fragment>
    );
  }
}

const HalfDiv = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const FullDiv = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const Img = styled.img`
  flex: none;
  max-width: 50%;
  border: 1px solid ${props => props.theme.appBackground};
`;
const PhotoSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: 80%;
`;

const NameSection = styled.div`
  display: flex;
  height: 33%;
`;

const StatsSection = styled.div`
  display: flex;
  height: 33%;
`;

const DisciplineSection = styled.div`
  display: flex;
  height: 33%;
`;

const ButtonSection = styled.div`
  display: flex;
  height: 50%;
`;
