import * as React from 'react';
import styled from 'styled-components/macro';
import { media } from 'styles/media';
import { DisciplineIcon } from 'app/components/Icons/categories/DisciplineIcon';
import { clickEffect } from 'styles/mixins';
import { PeopleIcon } from 'app/components/Icons/categories/PeopleIcon';
import { Link } from 'app/components/Link';

interface Props {
  value: string;
  iconValue?: string;
  text: string;
  gender?: '1' | '2';
}

export function DisciplineButton(props: Props) {
  return (
    <WrapperLink
      to={`/rankings?category=1,${props.value},0,${props.gender || '0'},0`}
    >
      <MainWrapper>
        <Border />
        {props.gender && <GenderIcon value={props.gender} />}
        <Icon value={props.iconValue || props.value} />
        <Text>{props.text}</Text>
      </MainWrapper>
      <Shade />
    </WrapperLink>
  );
}
const Shade = styled.div`
  display: flex;
  /* border-radius: 20px; */
  opacity: 0.2;
  background-color: ${props => props.theme.primaryDarkest};
  box-shadow: rgba(0, 0, 0, 0.5) 0px 2px 4px 2px;
  width: 80%;
  height: 2px;
  transform: skew(-15deg);
`;

const Icon = styled(DisciplineIcon)`
  width: 50px;
  margin: 16px 8px 4px 16px;
  & svg {
    width: 100%;
    height: 100%;
  }
  ${media.desktop`
    width: 40%;
  `};
`;

const Text = styled.span`
  text-align: center;
  font-size: 0.8rem;
  font-weight: bold;
  margin: 4px 16px 16px 16px;
  /* word-wrap: break-word; */
  width: 50px;
  ${media.desktop`
    font-size: 0.9rem;
    margin: 4px 16px 16px 8px;
    width: 5rem;
  `};

  & span {
    font-style: italic;
    font-weight: normal;
  }
`;

const GenderIcon = styled(PeopleIcon)`
  width: 30%;
  top: 10px;
  right: 0px;
  position: absolute;
  ${media.desktop`
      width: auto;
      height: 25px;
  `};
  & svg {
    width: 100%;
    height: 100%;
  }
`;

const Border = styled.div<{ isMain?: boolean }>`
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  border-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 40px;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 20px;

  border: 2px solid ${props => props.theme.textInverted};
  transform: skew(-15deg);
`;

const MainWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${clickEffect};
  margin-bottom: 12px;
  ${media.desktop`
  `};
`;

const WrapperLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 8px 16px;
  color: ${props => props.theme.textInverted};
  ${media.desktop`
    margin: 8px 32px;
  `};
`;

export default DisciplineButton;
