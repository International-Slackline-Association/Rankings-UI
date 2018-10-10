import * as React from 'react';
import Wrapper from './Wrapper';
import styled from 'styles/styled-components';
import TitledField from './TitledField';
import SideBoxButton from '../SideBoxButton';

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

class SideInfoBoxAthlete extends React.PureComponent<Props> {
  public render() {
    const item = this.props.item;
    return (
      <Wrapper>
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
      </Wrapper>
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
export default SideInfoBoxAthlete;
