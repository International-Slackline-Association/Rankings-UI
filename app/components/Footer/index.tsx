import * as React from 'react';
import Wrapper from './Wrapper';
import Link, { Info } from './Link';
import styled from 'styles/styled-components';
import media from 'styles/media';
import TitleLogo from 'components/Logo';
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
        </LinkGroup>
        <LinkGroup>
          <Link
            href={'//www.slacklineinternational.org/about/'}
            target="_blank"
          >
            About ISA Sports
          </Link>
          <Link
            href={'//www.slacklineinternational.org/members-partners/'}
            target="_blank"
          >
            Partners
          </Link>
          <Info>
            Contact Us: <br />
            isa-rankings@slacklineinternational.org
          </Info>
        </LinkGroup>
        <LinkGroup style={{ alignSelf: 'center' }}>
          <Link
            style={{ alignSelf: 'flex-end', width: '50%' }}
            href={'//www.slacklineinternational.org/'}
            target="_blank"
          >
            <TitleLogo />
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
