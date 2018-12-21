import * as React from 'react';
import styled from 'styles/styled-components';
import ComponentBackground from 'components/ComponentBackground';
import ContestAvatar from 'components/Avatars/ContestAvatar';
import IsaBlurBackground from 'components/ComponentBackground/isaBackground';
import Title from './Title';
import InfoField from './InfoField';
import media from 'styles/media';
import { SmallLoading } from 'components/Loading';
import { EmptyContainer } from 'components/Containers';
import ProfileAvatar from 'components/Avatars/ProfileAvatar';

interface Props {
  isLoading: boolean;
  item: AthleteItem | null;
}

interface AthleteItem {
  id: string;
  name: string;
  surname: string;
  country: string;
  age: number;
  profileUrl: string;
  overallRank: number;
}

class AthleteInfo extends React.PureComponent<Props> {
  public render() {
    const { item, isLoading } = this.props;
    return (
      <Wrapper>
        <IsaBlurBackground />
        <Content>
          {!isLoading && item ? (
            <React.Fragment>
              <LeftSection>
                <ProfileAvatar imageUrl={item.profileUrl} size={'big'} />
                <Title>
                  {item.name} {item.surname}
                </Title>
              </LeftSection>
              <RightSection>
                <InfoField keyField={'Age'} valueField={item.age.toString()} />
                <InfoField keyField={'Country'} valueField={item.country} />
                <InfoField
                  keyField={'OverallRank'}
                  valueField={item.overallRank.toString()}
                />
              </RightSection>
            </React.Fragment>
          ) : isLoading ? (
            <SmallLoading />
          ) : (
            <EmptyContainer style={{ color: 'white' }} minHeight={'100px'}>
              There is no data to display
            </EmptyContainer>
          )}
        </Content>
      </Wrapper>
    );
  }
}
const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 36px;

  ${media.tablet`
    margin-top: 0px;
    margin-left: 36px;
    height: 100%;
  `};
  ${media.desktop`
      width: 256px;
  `};
`;

const LeftSection = styled.div`
  display: flex;
  align-self: center;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  flex-basis: 33%;
`;

const Content = styled.div`
  position: relative;
  display: flex;
  align-self: center;
  flex-direction: column;
  padding: 16px 8px;

  ${media.tablet`
    flex-direction: row;
    height: 256px;
    padding: 36px 36px;
  `};
`;

const Wrapper = styled(ComponentBackground)`
  display: flex;
  margin-bottom: 32px;
  position: relative;
  justify-content: center;
  ${media.tablet`
    align-self: flex-start;
  `};
`;

export default AthleteInfo;
