import * as React from 'react';
import styled from 'styles/styled-components';
import media from 'styles/media';
import DisciplineIcon from 'components/Icons/categories/DisciplineIcon';
import { clickEffect } from 'styles/mixins';
import PeopleIcon from 'components/Icons/categories/PeopleIcon';

interface Props {
  value: string;
  iconValue?: string;
  text: string;
  gender?: '1' | '2';
  onClick: (id: string, gender?: string) => void;
}

class DisciplineButton extends React.PureComponent<Props> {
  private onSelect = (id: string, gender?: string) => {
    return evt => {
      if (id) {
        this.props.onClick(id, gender);
      }
    };
  };
  public render() {
    return (
      <Wrapper onClick={this.onSelect(this.props.value, this.props.gender)}>
        <MainWrapper>
          <Border />
          {/* {this.props.gender && <GenderIcon value={this.props.gender} />} */}
          <Icon value={this.props.iconValue || this.props.value} />
          <Text>
            {this.props.text}
            {/* {this.props.gender && (
              <span>
                <br />
                {this.props.gender === '1' ? 'Men' : 'Women'}
              </span>
            )} */}
          </Text>

          {/* {this.props.gender && (
            <GenderWrapper>
              <GenderIcon value={this.props.gender === 'men' ? '1' : '2'} />
              <GenderText gender={1}>{this.props.gender}</GenderText>
            </GenderWrapper>
          )} */}
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

const GenderWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 4px 16px 16px 16px;
  ${media.desktop`
    font-size: 0.9rem;
    margin: 4px 16px 16px 8px;
    /* width: 5rem; */
  `};
`;
interface GenderTextProps {
  gender: number;
}
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

const GenderText = styled(Text)`
  font-style: italic;
  font-weight: normal;
  margin: 0px 16px 8px 16px;
  ${media.desktop`
    margin: 0px 16px 8px 8px;
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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  ${clickEffect};
  margin: 8px 16px;
  ${media.desktop`
    margin: 8px 32px;
  `};
`;

export default DisciplineButton;
