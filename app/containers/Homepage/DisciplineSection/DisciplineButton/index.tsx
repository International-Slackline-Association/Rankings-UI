import * as React from 'react';
import styled from 'styles/styled-components';
import media from 'styles/media';
import DisciplineIcon from 'components/Icons/categories/DisciplineIcon';
import { clickEffect } from 'styles/mixins';

interface Props {
  value?: string;
  text: string;
  highlihted?: boolean;
}

class DisciplineButton extends React.PureComponent<Props> {
  public render() {
    return (
      <Wrapper>
        <MainWrapper>
          <Border isMain={this.props.highlihted} />
          {this.props.value && <Icon value={this.props.value} />}
          <Text>{this.props.text}</Text>
        </MainWrapper>
        <Shade />
      </Wrapper>
    );
  }
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
  width: 50%;
  margin: 16px 16px 4px 16px;
  & svg {
    width: 100%;
    height: 100%;
  }
`;

const Text = styled.span`
  text-align: center;
  font-size: 0.8em;
  font-weight: bold;
  margin: 4px 16px 16px 16px;
  word-wrap: break-word;
  width: 50px;
  ${media.desktop`
    font-size: 1rem;
    margin: 4px 16px 16px 16px;
    width: 70px;
  `};
`;

const Border = styled<{ isMain?: boolean }, 'div'>('div')`
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

  border: 2px solid
    ${props =>
      props.isMain ? props.theme.accentSecondary : props.theme.textInverted};
  transform: skew(-15deg);
`;

const MainWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${clickEffect};
  margin-bottom: 16px;
  ${media.desktop`
  `};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  ${clickEffect};
  margin: 8px 16px;
  ${media.desktop`
  `};
`;

export default DisciplineButton;
