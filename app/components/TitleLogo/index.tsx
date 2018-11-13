/**
 *
 * TitleLogo
 *
 */

import * as React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import isaLogo = require('./isaLogo.svg');
import messages from './messages';
import styled from 'styles/styled-components';

const TitleLogo: React.SFC<{}> = () => {
  return (
    <Wrapper>
      <FormattedMessage {...messages.titleLogoAltText}>
        {msg => <img src={isaLogo as any} alt={msg as string} />}
      </FormattedMessage>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;
  line-height: 0;
  height: 100%;
  width: 150px;
  display: flex;
  justify-content: center;

  img {
    max-width: 100%;
    display: block;
    align-self: center;
  }
`;
export default TitleLogo;
