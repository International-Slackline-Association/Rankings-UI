import * as React from 'react';
import Wrapper from './Wrapper';
import Link from './Link';
import styled from 'styles/styled-components';
import media from 'styles/media';
import TitleLogo from 'components/Logo';
import IsaSportsLogo from 'components/Logo/sportsLogo';
interface Props {}

class Footer extends React.PureComponent<Props> {
  public render() {
    return (
      <Wrapper>
        <LinkGroup>
          <Link
            href={'//www.slacklineinternational.org/ranking-list/'}
            target="_blank"
          >
            Ranking List Information
          </Link>
          <Link
            href={
              '//data.slacklineinternational.org/sport/athlete-registration/'
            }
            target="_blank"
          >
            Athlete Registration
          </Link>
          <Link
            href={
              '//data.slacklineinternational.org/sport/contest-registration/'
            }
            target="_blank"
          >
            Contest Registration
          </Link>
          <Link
            href={
              '//data.slacklineinternational.org/sport/ranking-list-faq/'
            }
            target="_blank"
          >
            FAQ
          </Link>
        </LinkGroup>
        <LinkGroup>
          <Link
            href={'//www.slacklineinternational.org/sport/'}
            target="_blank"
          >
            About ISA Sports
          </Link>
          <Link
            href={'//www.slacklineinternational.org/members-partners/'}
            target="_blank"
          >
            Members And Partners
          </Link>
          <Link
            href={'//github.com/International-Slackline-Association'}
            target="_blank"
          >
            Open Source
          </Link>
        </LinkGroup>
        <LinkGroup style={{ alignSelf: 'center' }}>
          <div style={{ width: '33%' }}>
            <IsaSportsLogo />
          </div>
          <Link href="mailto:isa-rankings@slacklineinternational.org">
            Contact Us
          </Link>
        </LinkGroup>
      </Wrapper>
    );
  }
}

const LinkGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  ${media.tablet`

  `};

  ${media.desktop`
    flex-basis: 33%;
    align-items: center;
  `};
`;

export default Footer;
