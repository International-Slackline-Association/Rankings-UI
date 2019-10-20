import * as React from 'react';
import styled from 'styles/styled-components';
import media from 'styles/media';
import DisciplineButton from './DisciplineButton';

interface Props {
  onClick: (value: string) => void;
}

class DisciplineSection extends React.PureComponent<Props> {
  public render() {
    return (
      <Wrapper>
        <Title>SELECT A DISCIPLINE</Title>
        <DisciplineWrapper>
          <DisciplineButton
            onClick={this.props.onClick}
            value={'2'}
            text={'Trickline Aerial'}
            highlihted
          />
          <DisciplineButton
            onClick={this.props.onClick}
            value={'3'}
            text={'Trickline Jib Static'}
          />
          <DisciplineButton
            onClick={this.props.onClick}
            value={'4'}
            text={'Trickline Transfer'}
          />
          <DisciplineButton
            onClick={this.props.onClick}
            value={'7'}
            text={'Speedline Sprint'}
            highlihted
          />
          <DisciplineButton
            onClick={this.props.onClick}
            value={'8'}
            text={'Speedline Long'}
          />
          <DisciplineButton
            onClick={this.props.onClick}
            value={'5'}
            text={'Freestyle Highline'}
            highlihted
          />
          <DisciplineButton
            onClick={this.props.onClick}
            value={'10'}
            text={'Blind Walking'}
          />
          <DisciplineButton
            onClick={this.props.onClick}
            value={'9'}
            text={'Endurance'}
          />
          <DisciplineButton
            onClick={this.props.onClick}
            value={'11'}
            text={'Rigging'}
          />
          <DisciplineButton
            onClick={this.props.onClick}
            value={'1'}
            iconValue={'0'}
            text={'Overall Trickline'}
          />
          <DisciplineButton
            onClick={this.props.onClick}
            value={'6'}
            iconValue={'0'}
            text={'Overall Speedline'}
          />
          <DisciplineButton
            onClick={this.props.onClick}
            value={'0'}
            text={'Overall Slackliner'}
          />
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
  margin: 8px 0px;
  justify-content: center;
  align-items: center;
  ${media.desktop`
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
