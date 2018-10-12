import * as React from 'react';
import { Img, HalfDiv, FullDiv, PhotoSection } from '..';
import TitledField from '../TitledField';
import SideBoxButton from 'components/SideBoxButton';
import styled from 'styles/styled-components';

export interface ContestProps {
  item: {
    id: string;
    name: string;
    location: string;
    prize: string;
    size: string;
    date: string;
    Disciplines: string[];
    profileUrl: string;
  };
}

class InfoBoxContest extends React.PureComponent<ContestProps> {
  public render() {
    const item = this.props.item;
    return (
      <React.Fragment>
        <PhotoSection>
          <Img src={item.profileUrl} />
        </PhotoSection>
        <NameSection>
          <FullDiv>
            <TitledField title={'Name'} value={item.name} />
          </FullDiv>
        </NameSection>
        <LocationSection>
          <FullDiv>
            <TitledField title={'Location'} value={item.location} />
          </FullDiv>
        </LocationSection>
        <StatsSection>
          <HalfDiv>
            <TitledField title={'Prize'} value={item.prize} />
          </HalfDiv>
          <HalfDiv>
            <TitledField title={'Size'} value={item.size} />
          </HalfDiv>
        </StatsSection>
        <DateSection>
          <FullDiv>
            <TitledField title={'Date'} value={item.date} />
          </FullDiv>
        </DateSection>
        <DisciplineSection>
          <FullDiv>
            <TitledField title={'Disciplines'} value={item.Disciplines.join(', ')} />
          </FullDiv>
        </DisciplineSection>
        <ButtonSection>
          <FullDiv>
            <SideBoxButton>Details</SideBoxButton>
          </FullDiv>
        </ButtonSection>
      </React.Fragment>
    );
  }
}
const NameSection = styled.div`
  display: flex;
  height: 33%;
`;
const LocationSection = styled.div`
  display: flex;
  height: 33%;
`;

const StatsSection = styled.div`
  display: flex;
  height: 33%;
`;

const DateSection = styled.div`
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
export default InfoBoxContest;
