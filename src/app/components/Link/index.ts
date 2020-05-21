import styled from 'styled-components/macro';
import { Link as RouterLink } from 'react-router-dom';
import { clickEffect } from 'styles/mixins';

export const Link = styled(RouterLink)`
  ${clickEffect};
  text-decoration: none;
`;
