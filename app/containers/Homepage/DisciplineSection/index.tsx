import * as React from 'react';
import styled from 'styles/styled-components';
import media from 'styles/media';
import DisciplineButton from './DisciplineButton';

interface Props {
  onClick: (id: string, gender?: string) => void;
}

class DisciplineSection extends React.PureComponent<Props> {
  public render() {
    return (
      <Wrapper>
        <DisciplineWrapper>
          <Title>Main Disciplines</Title>
          <Divider />
          <DisciplineGroup>
            <DisciplineButton
              onClick={this.props.onClick}
              value={'2'}
              text={'Trickline Aerial'}
              gender={'1'}
            />
            <DisciplineButton
              onClick={this.props.onClick}
              value={'2'}
              text={'Trickline Aerial'}
              gender={'2'}
            />
            <DisciplineButton
              onClick={this.props.onClick}
              value={'5'}
              text={'Freestyle Highline'}
              gender={'1'}
            />
            <DisciplineButton
              onClick={this.props.onClick}
              value={'5'}
              text={'Freestyle Highline'}
              gender={'2'}
            />
            <DisciplineButton
              onClick={this.props.onClick}
              value={'7'}
              text={'Speedline Sprint'}
              gender={'1'}
            />
            <DisciplineButton
              onClick={this.props.onClick}
              value={'7'}
              text={'Speedline Sprint'}
              gender={'2'}
            />
          </DisciplineGroup>
          <Title>Further Disciplines</Title>
          <Divider />
          <DisciplineGroup>
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
              value={'8'}
              text={'Speedline Long'}
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
          </DisciplineGroup>
        </DisciplineWrapper>
      </Wrapper>
    );
  }
}

const Title = styled.span`
  text-align: center;
  color: ${props => props.theme.textInverted};
  font-size: 1.2rem;
  font-weight: bold;
  align-self: center;
  margin: 2rem 0 1rem 0;
  ${media.desktop`
    margin: 0;
  `};
`;

const Divider = styled.div`
  display: flex;
  height: 1px;
  width: 80%;
  background-color: ${props => props.theme.componentBackground};
  margin-bottom: 1rem;
  ${media.desktop`
    /* width: 100%; */
  `};
`;

const DisciplineGroup = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  /* margin: 8px 0px; */
  justify-content: center;
  align-items: center;
  ${media.desktop`
    /* justify-content: flex-start; */
    /* padding: 0px 1rem 0px 12%; */
    /* margin: 1rem 0px 2rem 0; */
  `};
`;

const DisciplineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  /* margin: 1rem 0px; */
  justify-content: center;
  align-items: center;
  ${media.desktop`
    /* justify-content: flex-start; */
    padding: 0px 1rem 0px 20%;
    /* margin: 1rem 0px 2rem 0; */
  `};
`;

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  /* height: 100%; */
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
    /* padding: 5rem 0rem 0rem 0rem; */
    clip-path: ellipse(100% 75% at 100% 50%);
  `};
`;

export default DisciplineSection;
