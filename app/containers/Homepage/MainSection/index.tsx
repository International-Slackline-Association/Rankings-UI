import * as React from 'react';
import styled from 'styles/styled-components';
import media from 'styles/media';
import Header from './Header';
import { DefaultButton, elevatedShadow, clickEffect, LinkButton } from 'styles/mixins';

interface Props {}

class MainSection extends React.PureComponent<Props> {
  public render() {
    return (
      <Wrapper>
        <Header />
        <Title>
          Slackline World <br />
          Ranking List
        </Title>
        <Subtitle>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley
        </Subtitle>
        <Button>Learn More</Button>
        <ButtonWrapper>
          <SmallButton>Athlete Registration</SmallButton>
          <SmallButton>Contest Registration</SmallButton>
        </ButtonWrapper>
      </Wrapper>
    );
  }
}

const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 8px;
  align-items: center;
  justify-content: space-between;
  width: 75%;
  ${media.desktop`
    width: 50%;

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
  background-color: ${props => props.theme.accentSecondary};
  color: ${props => props.theme.textInverted};
  font-weight: bold;
  padding: 8px;
  margin-top: 8px;
  width: 75%;
  ${media.desktop`
    font-size: 1.5rem;
    width: 50%;
    margin-top: 5vh
  `};
`;

const Subtitle = styled.span`
  display: flex;
  color: ${props => props.theme.componentBackgroundInverted};
  font-weight: bold;
  text-align: center;
  font-size: 1rem;
  margin-top: 8px;
  ${media.desktop`
    text-align: left;
    font-size: 1.5rem;
    margin-top: 5vh;
    /* line-height: 1.5rem; */

    width: 50%;
  `};
`;

const Title = styled.span`
  display: flex;
  color: ${props => props.theme.primaryDarker};
  font-weight: bold;
  text-align: center;
  font-size: 2rem;
  margin-top: 16px;
  ${media.desktop`
    text-align: left;
    font-size: 4rem;
    margin-top: 15vh;
    letter-spacing: 5px;
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
