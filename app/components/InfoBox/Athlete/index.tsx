import * as React from 'react';
import { Img, HalfDiv, FullDiv, PhotoSection } from '../common';
import TitledField from '../TitledField';
import SideBoxButton from 'components/SideBoxButton';
import styled from 'styles/styled-components';

export interface AthleteProps {
  item: {
    id: string;
    name: string;
    surname: string;
    age: number;
    profileUrl: string;
    overallRank: number;
    topDisciplines: string[];
  };
  showButton?: boolean;
  onButtonClick?();
}

class InfoBoxAthlete extends React.PureComponent<AthleteProps> {
  public render() {
    const { item, onButtonClick } = this.props;
    const showButton = this.props.showButton === undefined ? true : this.props.showButton ;
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
          <FullDiv>{showButton && <SideBoxButton onClick={onButtonClick}>Contests</SideBoxButton>}</FullDiv>
        </ButtonSection>
      </React.Fragment>
    );
  }
}
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
export default InfoBoxAthlete;
