import * as React from 'react';
import styled from 'styles/styled-components';
import { green } from '@material-ui/core/colors';

interface Props {
  type: 'Available' | 'NotAvailable';
}

class ResultsIndicatorText extends React.PureComponent<Props> {
  public render() {
    return (
      <Text type={this.props.type}>
        {this.props.type === 'Available'
          ? `Results Available ✓`
          : ''}
      </Text>
    );
  }
}

interface TextProps {
  type: 'Available' | 'NotAvailable';
}

const Text = styled<TextProps, 'span'>('span')`
  font-style: italic;
  font-size: 0.5em;
  color: ${props => (props.type === 'Available' ? 'green' : 'red')};
`;

export default ResultsIndicatorText;
