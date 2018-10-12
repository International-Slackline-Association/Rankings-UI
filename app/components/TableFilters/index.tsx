import * as React from 'react';

import styled from 'styles/styled-components';
import media from 'styles/media';
import SideBoxButton from '../SideBoxButton';
import Modal from 'components/Modal';

interface State {
  isModalOpen: boolean;
}

class TableFilters extends React.PureComponent<{}, State> {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  private openModal() {
    this.setState({ isModalOpen: true });
  }

  private closeModal() {
    this.setState({ isModalOpen: false });
  }

  public render() {
    return (
      <Wrapper>
        <TableFiltersWrapper>{this.props.children}</TableFiltersWrapper>
        <ShowFilterSection>
          <SideBoxButton onClick={this.openModal} small>
            Show Filters
          </SideBoxButton>
          <Modal isOpen={this.state.isModalOpen} onRequestClose={this.closeModal}>
            <TableFiltersModalWrapper>{this.props.children}</TableFiltersModalWrapper>
          </Modal>
        </ShowFilterSection>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  display: flex;
  flex-grow: 1;
  margin-left: 2em;
  margin-top: 1.2em;
  justify-content: center;
  ${media.tablet`
  `};

  ${media.desktop`
  `};
`;

const TableFiltersWrapper = styled.div`
  display: none;
  flex-grow: 1;
  ${media.tablet`
    display: flex;
    font-size: 1rem;
  `};
`;

const TableFiltersModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* flex-grow: 1; */
  margin: 3em 7em 0em 7em;
  ${media.tablet`
    display: none;
  `};
`;

const ShowFilterSection = styled.div`
  /* position: relative; */
  /* width: 70%; */
  ${media.tablet`
    display: none;
  `};
`;


export default TableFilters;
