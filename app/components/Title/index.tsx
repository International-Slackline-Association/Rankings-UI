/**
 *
 * Title
 *
 */

import * as React from 'react';
import { default as styled, colors } from 'styles/styled-components';
import { FormattedMessage } from 'react-intl';

import TitleSvg from './title.svg';
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
  color: ${colors.white};
  font-size: 12px;
  font-weight: 700;

  ${media.tablet`
    font-weight: 700;
    font-size: 20px;
  `};
`;

const Wrapper = styled.div`
  text-align: center;
  line-height: 0;

  img {
    max-width: 100%;
    display: block;
  }
`;

export default Title;
