import * as React from 'react';
import styled from 'styles/styled-components';
import media from 'styles/media';
import DisciplineButton from './DisciplineButton';

interface Props {}

class DisciplineSection extends React.PureComponent<Props> {
  public render() {
    return (
      <Wrapper>
        <Title>SELECT A DISCIPLINE</Title>
        <DisciplineWrapper>
          <DisciplineButton value={'2'} text={'Aerial'} highlihted/>
          <DisciplineButton value={'3'} text={'Jib Static'} />
          <DisciplineButton value={'4'} text={'Transfer'} />
          <DisciplineButton value={'7'} text={'Sprint'} highlihted/>
          <DisciplineButton value={'8'} text={'Speed Highline'} />
          <DisciplineButton value={'5'} text={'Freestyle Highline'} highlihted/>
          <DisciplineButton value={'10'} text={'Blind Walking'} />
          <DisciplineButton value={'9'} text={'Endurance'} />
          <DisciplineButton value={'11'} text={'Rigging'} />
          <DisciplineButton value={'0'} text={'Overall Trickline'}  />
          <DisciplineButton value={'0'} text={'Overall Speedline'} />
          <DisciplineButton value={'0'} text={'Overall Highline'} />
          <DisciplineButton value={'0'} text={'Overall Slackliner'} />
        </DisciplineWrapper>
      </Wrapper>
    );
  }
}

const Title = styled.span`
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  align-self: center;
  /* flex-basis: 100%; */
  margin: 32px 0px 0px 0px;
  ${media.desktop`
    font-size: 2.5rem;
    /* margin-left: 10%; */
  `};
`;

const DisciplineWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  margin: 16px 0px;
  justify-content: center;
  align-items: center;
  ${media.desktop`
    width: 100%;
    /* justify-content: flex-start; */
    padding: 0px 5vw;
    margin: 16px 0px 32px 0;
  `};
`;

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: ${props => props.theme.primaryDarker};
  background: ${props =>
    `linear-gradient(35deg, ${props.theme.primaryDarker} 30%, ${
      props.theme.primaryLightest
    } 100%)`};
  color: ${props => props.theme.textInverted};
  clip-path: ellipse(137% 100% at 50% 100%);
  ${media.desktop`
    justify-content: center;
    /* align-items: flex-end; */
    clip-path: ellipse(100% 60% at 100% 50%);
  `};
`;

export default DisciplineSection;
