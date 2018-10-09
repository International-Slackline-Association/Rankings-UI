import * as React from 'react';
import styled from 'styles/styled-components';
interface Props {
  title: string;
  value: string;
}

const TitledField: React.SFC<Props> = props => {
  return (
    <Wrapper>
      <Title>{props.title}</Title>
      <Value>{props.value}</Value>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const Title = styled.span`
  color: ${props => props.theme.textInvertedSecondary};
  font-style: italic;
  font-size: 1.25em;
  display: flex;
  /* width: 100%; */
  align-content: center;
  align-self: center;
  text-align: center;
`;

const Value = styled.span`
  color: ${props => props.theme.textInverted};
  font-weight: bold;
  font-size: 1.25em;
  display: flex;
  /* width: 100%; */
  align-self: center;
  text-align: center;
`;

export default TitledField;
