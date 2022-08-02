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
import tttmLogo from './SponsorLogos/tttm.png';
import blackrollLogo from './SponsorLogos/blackroll.png';

interface Props {
  contestsClicked: () => void;
}

class MainSection extends React.PureComponent<Props> {
  public render() {
    return (
      <Wrapper>
        <Header />
        <CenterWrapper>
          <ISASportLogo />
          <Title>
            Slackline World <br />
            Ranking List
          </Title>
          <Subtitle>
            Explore the world ranking of slackline sports.
            <br />
            <br />
            Athletes are currently competing in a range of disciplines, the most
            popular being Trickline, Freestyle Highline and Speedline.
            <br />
            <br />
            Click on any discipline to discover the best ranking athletes.
          </Subtitle>
          <ButtonWrapper>
            <SmallButton
              href={'//data.slacklineinternational.org/sport/ranking-list-faq/'}
              target="_blank"
              isPrimaryColor
            >
              How does it work?
            </SmallButton>
            <SmallButton
              href={
                '//data.slacklineinternational.org/sport/athlete-registration/'
              }
              target="_blank"
              isPrimaryColor
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
            <SmallButton onClick={this.props.contestsClicked}>
              Contest List
            </SmallButton>
          </ButtonWrapper>
        </CenterWrapper>
        {/* <SponsorWrapper>
          <span>Official Partners</span>
          <SponsorLogoWrapper>
            <SponsorLogo href={'//www.ticketothemoon.com/'} target="_blank">
              <img src={tttmLogo} />
            </SponsorLogo>
            <SponsorLogo href={'//www.blackroll.com/'} target="_blank">
              <img src={blackrollLogo} />
            </SponsorLogo>
          </SponsorLogoWrapper>
        </SponsorWrapper> */}
      </Wrapper>
    );
  }
}

const ISASportLogo = styled.img.attrs({
  src: isaSportLogo,
})`
  height: 96px;
  margin-top: 16px;
  ${media.desktop`
    margin-top: 16px;
  `};
`;

const SponsorLogo = styled(LinkButton)`
  /* margin-right: 2rem; */
  width: 45%;
  img {
    width: 100%;
    flex: none;
    /* max-height: 100%; */
  }
`;

const SponsorLogoWrapper = styled.div`
  display: flex;
  margin-top: 4px;
  align-items: center;
  justify-content: space-between;
`;

const SponsorWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 16px;
  width: 75%;
  & span {
    font-size: 1rem;
    /* font-weight: bold; */
    color: ${props => props.theme.newTextPrimaryLighter};
  }
  ${media.desktop`
    align-items: flex-start;
    margin-top: auto;
    width: 25rem;
  `};
`;

const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 8px;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  ${media.desktop`
    width: 25rem;
  `};
`;

const SmallButton = styled<any>(LinkButton)`
  ${elevatedShadow};
  border-radius: 4px;
  background-color: ${props =>
    props.isPrimaryColor ? props.theme.primaryLighter : props.theme.accent};
  color: ${props => props.theme.textInverted};
  font-weight: bold;
  padding: 8px;
  margin-top: 8px;
  width: 48%;
  font-size: 0.8rem;
  ${media.desktop`
    font-size: 1rem;
  `};
`;

const Subtitle = styled.p`
  display: flex;
  flex-direction: column;
  color: ${props => props.theme.newTextPrimary};
  font-weight: bold;
  text-align: center;
  font-size: 1rem;
  margin-top: 8px;
  ${media.desktop`
    text-align: left;
    font-size: 1rem;
    margin-top: 16px;
    /* line-height: 1.5rem; */
    width: 75%;
  `};
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
    margin-top: 8px;
    letter-spacing: 2px;
    line-height: 50px;
  `};
`;

const CenterWrapper = styled.div`
  display: flex;
  justify-self: center;
  flex-direction: column;
  align-items: center;
  margin: auto 0px;
  ${media.desktop`
    align-items: flex-start;
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
    justify-content: space-between;
    /* height: 100%; */
    width: 45vw;
    padding: 32px 32px 32px 128px;
  `};
`;

export default MainSection;
