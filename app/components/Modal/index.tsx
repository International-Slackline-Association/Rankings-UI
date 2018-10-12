import * as React from 'react';
import { TransitionGroup } from 'react-transition-group';
import ModalComponent, { ModalComponentProps } from './ModalComponent';
import styled from 'styles/styled-components';
import media from 'styles/media';

interface OwnProps extends ModalComponentProps {
  isOpen: boolean;
  className?: string;
}

class Modal extends React.PureComponent<OwnProps> {
  public render() {
    const { isOpen, className, ...restOf } = this.props;
    return (
      <TransitionGroup component={React.Fragment}>
        {isOpen && <ModalComponent className={className} {...restOf} />}
      </TransitionGroup>
    );
  }
}

const MobileOnlyModal = styled(Modal)`
  /* display: flex; */
  ${media.desktopLarge`
    display: none;
  `};
`;

export { MobileOnlyModal };

export default Modal;
