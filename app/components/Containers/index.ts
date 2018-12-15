import styled from 'styles/styled-components';

interface CointainerProps {
  minHeight?: string;
}

export const EmptyContainer = styled<CointainerProps, 'div'>('div')`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: normal;
  color: ${props => props.theme.textSecondary};
  padding: 0 24px;
  text-align: center;
  min-height: ${props => props.minHeight}
`;

export const TinyLoadingContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  right: 4px;
  align-items: center;
  align-self: center;
  font-weight: normal;
  padding: 0 8px;
  text-align: center;
`;

export const SmallLoadingContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: normal;
  color: ${props => props.theme.textSecondary};
  padding: 0 24px;
  text-align: center;
`;
