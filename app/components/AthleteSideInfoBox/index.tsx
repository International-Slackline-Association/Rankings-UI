import * as React from 'react';
import Wrapper from './Wrapper';
import styled from 'styles/styled-components';
import TitledField from './TitledField';
import SideBoxButton from '../SideBoxButton';

const AthleteSideInfoBox: React.SFC<{}> = () => {
  return (
    <Wrapper>
      <PhotoSection>
        <Img src={'http://www.slackattack.ch/wp-content/uploads/2015/11/Vorstand_Tom.jpg'} />
      </PhotoSection>
      <NameSection>
        <HalfDiv>
          <TitledField title={'Name'} value={'Thomas'} />
        </HalfDiv>
        <HalfDiv>
          <TitledField title={'Surname'} value={'Buckingham'} />
        </HalfDiv>
      </NameSection>
      <StatsSection>
        <HalfDiv>
          <TitledField title={'Age'} value={'32'} />
        </HalfDiv>
        <HalfDiv>
          <TitledField title={'Overall Rank'} value={'2'} />
        </HalfDiv>
      </StatsSection>
      <DisciplineSection>
        <FullDiv>
          <TitledField title={'Top Disciplines'} value={'Speedline, Waterline, Weedline'} />
        </FullDiv>
      </DisciplineSection>
      <ButtonSection>
        <FullDiv>
          <SideBoxButton>Contests</SideBoxButton>
        </FullDiv>
      </ButtonSection>
    </Wrapper>
  );
};

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
  /* background-color: yellow; */
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  flex-basis: 80%;
`;

const NameSection = styled.div`
  display: flex;
  /* flex-basis: 100%; */
  height: 33%;
`;

const StatsSection = styled.div`
  /* background-color: red; */
  display: flex;
  /* flex-basis: 20%; */
  height: 33%;
`;

const DisciplineSection = styled.div`
  display: flex;
  /* flex-basis: 20%; */
  height: 33%;
`;

const ButtonSection = styled.div`
  /* background-color: red; */
  display: flex;
  height: 50%;
`;
export default AthleteSideInfoBox;
