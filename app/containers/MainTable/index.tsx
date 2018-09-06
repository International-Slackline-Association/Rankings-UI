import * as React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styled, { colors } from 'styles/styled-components';
import media from 'styles/media';
import Results from './Results';

class MainTable extends React.Component<{}, {}> {
  public render() {
    return (
      <Wrapper>
        <Results>
          <table>
            <thead>
              <tr>
                <td title="Rank">
                  <FormattedMessage {...messages.theadRank} />
                </td>
                <td title="Name">
                  <FormattedMessage {...messages.theadName} />
                </td>
                <td title="Age">
                  <FormattedMessage {...messages.theadAge} />
                </td>
                <td title="Country">
                  <FormattedMessage {...messages.theadCountry} />
                </td>
                <td title="Points">
                  <FormattedMessage {...messages.theadPoints} />
                </td>
              </tr>
            </thead>
            <tbody>
              <tr key={123}>
                <td>#1</td>
                <td>Can Sahin</td>
                <td>27</td>
                <td>TR</td>
                <td>240</td>
              </tr>
              <tr key={1231}>
                <td>#1</td>
                <td>Can Sahin</td>
                <td>27</td>
                <td>TR</td>
                <td>240</td>
              </tr>
              <tr key={1232}>
                <td>#1</td>
                <td>Can Sahin</td>
                <td>27</td>
                <td>TR</td>
                <td>240</td>
              </tr>
            </tbody>
          </table>
        </Results>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  /* background-color: ${colors.green}; */
  width: 100%;
  height: 100%;
  margin-top: 24px;

  ${media.tablet`

  `};

  ${media.desktop`

  `};
`;

export default MainTable;
