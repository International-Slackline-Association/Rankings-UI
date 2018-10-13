import * as React from 'react';
import { Img, HalfDiv, FullDiv, PhotoSection } from '../common';
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
    disciplines: string[];
    profileUrl: string;
  };
  showButton?: boolean;
  onButtonClick?();
}

class InfoBoxContest extends React.PureComponent<ContestProps> {
  public render() {
    const { item, onButtonClick } = this.props;
    const showButton = this.props.showButton === undefined ? true : this.props.showButton ;
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
            <TitledField title={'Disciplines'} value={item.disciplines.join(', ')} />
          </FullDiv>
        </DisciplineSection>
        <ButtonSection>
          <FullDiv>{showButton && <SideBoxButton onClick={onButtonClick}>Details</SideBoxButton>}</FullDiv>
        </ButtonSection>
      </React.Fragment>
    );
  }
}
const NameSection = styled.div`
  display: flex;
  height: 25%;
`;
const LocationSection = styled.div`
  display: flex;
  height: 25%;
`;

const StatsSection = styled.div`
  display: flex;
  height: 25%;
`;

const DateSection = styled.div`
  display: flex;
  height: 20%;
`;

const DisciplineSection = styled.div`
  display: flex;
  height: 25%;
`;

const ButtonSection = styled.div`
  display: flex;
  height: 50%;
`;
export default InfoBoxContest;
