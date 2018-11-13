/**
 *
 * Title
 *
 */

import * as React from 'react';
import { default as styled, colors } from 'styles/styled-components';
import { FormattedMessage } from 'react-intl';

import messages from './messages';
import media from 'styles/media';

// import PropTypes from 'prop-types';
// import styled from 'styled-components';

const Title: React.SFC<{}> = () => {
  return (
    <Wrapper>
      <Text>
        <FormattedMessage {...messages.titleAltText} />
      </Text>
    </Wrapper>
  );
};

const Text = styled.div`
  color: ${colors.paleWhite};
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: -1px;
  display: flex;
  ${media.tablet`
    font-weight: bold;
    font-size: 1.66rem;
    letter-spacing: -1.75px;
  `};
`;

const Wrapper = styled.div`
  display: flex;
  text-align: center;
  line-height: 0;
`;

export default Title;
