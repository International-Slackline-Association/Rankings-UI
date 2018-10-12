import * as React from 'react';
import { TransitionGroup } from 'react-transition-group';
import ModalComponent, { ModalComponentProps } from './ModalComponent';


interface OwnProps extends ModalComponentProps {
  isOpen: boolean;
}

class Modal extends React.PureComponent<OwnProps> {
  public render() {
    const { isOpen, ...restOf } = this.props;
    return (
      <TransitionGroup component={React.Fragment}>
        {isOpen && <ModalComponent {...restOf} />}
      </TransitionGroup>
    );
  }
}

export default Modal;
