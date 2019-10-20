import * as React from 'react';
import styled from 'styles/styled-components';
import media from 'styles/media';
import Header from './Header';
import {
  DefaultButton,
  elevatedShadow,
  clickEffect,
  LinkButton,
} from 'styles/mixins';
import isaSportLogo from './isaSportLogo.svg?file';

interface Props {}

class MainSection extends React.PureComponent<Props> {
  public render() {
    return (
      <Wrapper>
        <Header />
        <ISASportLogo />
        <Title>
          Slackline World <br />
          Ranking List
        </Title>
        <Subtitle>
          Official slackline world rankings from International Slackline
          Association <br />
          <br />
          <span>9 disciplines | 180+ contests | 700+ athletes</span>
        </Subtitle>
        <Button
          href={'//www.slacklineinternational.org/ranking-list/'}
          target="_blank"
        >
          Learn More
        </Button>
        <ButtonWrapper>
          <SmallButton
            href={
              '//data.slacklineinternational.org/sport/athlete-registration/'
            }
            target="_blank"
          >
            Athlete Registration
          </SmallButton>
          <SmallButton
            href={
              '//data.slacklineinternational.org/sport/contest-registration/'
            }
            target="_blank"
          >
            Contest Registration
          </SmallButton>
        </ButtonWrapper>
      </Wrapper>
    );
  }
}

const ISASportLogo = styled.img.attrs({
  src: isaSportLogo,
})`
  height: 64px;
  margin-top: 16px;
  ${media.desktop`
    margin-top: 15vh;
  `};
`;

const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 8px;
  align-items: center;
  justify-content: space-between;
  width: 75%;
  ${media.desktop`
    width: 25rem;
  `};
`;

const SmallButton = styled(LinkButton)`
  ${elevatedShadow};
  border-radius: 4px;
  background-color: ${props => props.theme.accent};
  color: ${props => props.theme.textInverted};
  font-weight: bold;
  padding: 8px;
  margin-top: 8px;
  width: 48%;
  font-size: 0.5rem;
  ${media.desktop`
    font-size: 1rem;
  `};
`;

const Button = styled(LinkButton)`
  ${elevatedShadow};
  border-radius: 4px;
  background-color: ${props => props.theme.primaryLighter};
  color: ${props => props.theme.textInverted};
  font-weight: bold;
  padding: 8px;
  margin-top: 16px;
  width: 75%;
  ${media.desktop`
    font-size: 1.5rem;
    width: 25rem;
    margin-top: 5vh
  `};
`;

const Subtitle = styled.span`
  display: flex;
  flex-direction: column;
  color: ${props => props.theme.newTextPrimary};
  font-weight: bold;
  text-align: center;
  font-size: 1rem;
  margin-top: 8px;
  ${media.desktop`
    text-align: left;
    font-size: 1.2rem;
    margin-top: 32px;
    /* line-height: 1.5rem; */
    width: 50%;
  `};

  & span {
    font-size: 1.2rem;
    ${media.desktop`
      font-size: 1.5rem;
  `};
  }
`;

const Title = styled.span`
  display: flex;
  color: ${props => props.theme.primary};
  font-weight: bold;
  text-align: center;
  font-size: 2rem;
  margin-top: 8px;
  ${media.desktop`
    text-align: left;
    font-size: 4rem;
    margin-top: 16px;
    letter-spacing: 2px;
    line-height: 50px;
  `};
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 8px 16px 16px 32px;
  ${media.desktop`
    align-items: flex-start;
    height: 100%;
    width: 45vw;
    padding: 32px 32px 32px 128px;
  `};
`;

export default MainSection;
