import * as React from 'react';

import { FormattedMessage } from 'react-intl';
import styled, { colors } from 'styles/styled-components';

import Autosuggest = require('react-autosuggest');
import media from 'styles/media';

class TableFilter extends React.Component<{}, {}> {
  public render() {
    return <Wrapper>1234</Wrapper>;
  }
}
const Wrapper = styled.div`
  /* background-color: ${colors.gray}; */
  display: flex;
  justify-content: center;
  width: 100%;
  height: 24px;
  /* ${media.tablet`
    width: 120px;
  `}; */
`;

export default TableFilter;
