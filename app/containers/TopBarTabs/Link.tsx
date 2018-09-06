import styled, { css } from 'styles/styled-components';

import { Link } from 'react-router-dom';

const LinkWrapper = styled(Link)`
  color: ${props => props.theme.textPrimary};
`;

export default LinkWrapper;
