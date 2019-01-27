import * as React from 'react';
import ComponentBackground from 'components/ComponentBackground';
import styled from 'styles/styled-components';
import { DefaultButton as Button } from 'styles/mixins';
import Section from './Section';

interface Props {
  isOpen: boolean;
  onClick(): void;
}

class CategoryFilterButton extends React.PureComponent<Props> {
  public render() {
    return (
      <Wrapper>
        <Button onClick={this.props.onClick}>
          <Section type={'category'} />
          <Section type={'filter'} />
          {this.props.isOpen ? <CaretUp /> : <CaretDown />}
        </Button>
      </Wrapper>
    );
  }
}

const CaretUp = styled.div`
  margin: 8px 8px;
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-bottom: 6px solid ${props => props.theme.primary};
`;

const CaretDown = styled.div`
  margin: 8px 8px;
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid ${props => props.theme.primary};
`;

const Wrapper = styled(ComponentBackground)`
  display: flex;
  justify-content: flex-start;
  align-self: flex-start;
`;

export default CategoryFilterButton;
