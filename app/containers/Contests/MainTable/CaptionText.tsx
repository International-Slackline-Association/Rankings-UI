import * as React from 'react';
import styled from 'styles/styled-components';
import { green } from '@material-ui/core/colors';
import { ContestGender } from 'types/application';
import PeopleIcon from 'components/Icons/categories/PeopleIcon';

interface Props {
  gender: ContestGender;
  resultsAvailable: boolean;
}

class CaptionText extends React.PureComponent<Props> {
  public render() {
    const gender = this.props.gender;
    return (
      <Wrapper>
        {gender.id !== 0 && (
          <React.Fragment>
            <GenderWrapper>
              <PeopleIcon value={gender.id.toString()} />
            </GenderWrapper>
            <GenderText gender={gender.id}>{gender.name}</GenderText>
          </React.Fragment>
        )}
        <ResultsAvailableText resultsAvailable={this.props.resultsAvailable}>
          {this.props.resultsAvailable ? `Results Available ✓` : ''}
        </ResultsAvailableText>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const GenderWrapper = styled.span`
  width: 15px;
  height: 15px;
  align-items: center;
  display: flex;
`;

interface ResultsAvailableTextProps {
  resultsAvailable: boolean;
}

interface GenderTextProps {
  gender: number;
}

const ResultsAvailableText = styled<ResultsAvailableTextProps, 'span'>('span')`
  font-style: italic;
  font-size: 0.9em;
  color: ${props => (props.resultsAvailable ? 'green' : 'red')};
`;

const GenderText = styled<GenderTextProps, 'span'>('span')`
  font-style: italic;
  font-size: 0.9em;
  margin-right: 8px;
  color: ${props => (props.gender === 1 ? '#33619D' : '#D4639B')};
`;

export default CaptionText;
