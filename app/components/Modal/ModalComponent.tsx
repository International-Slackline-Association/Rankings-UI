import * as React from 'react';
import Portal from './Portal';
import Overlay from './Overlay';
import Window from './Window';
import Container from './Container';
import { open, close } from './animations';
import CloseButton from './CloseButton';
import IconClose from 'components/Icons/IconClose';

export interface ModalComponentProps {
  onRequestClose();
  showCloseButton?: boolean;
  content?: {
    component: any;
    props?: object;
  };
}

class ModalComponent extends React.PureComponent<ModalComponentProps> {
  constructor(props) {
    super(props);
    this.keyPressHandler = this.keyPressHandler.bind(this);
  }

  public static defaultProps = {
    showCloseButton: true,
  };

  private overlayRef: any = React.createRef();
  private windowRef: any = React.createRef();

  private keyPressHandler(e) {
    if (e.keyCode === 27) {
      this.props.onRequestClose();
    }
  }

  public componentDidMount() {
    window.addEventListener('keyup', this.keyPressHandler);
  }

  public componentWillUnmount() {
    window.removeEventListener('keyup', this.keyPressHandler);
  }

  public componentWillEnter(callback) {
    open(this.overlayRef.current, this.windowRef.current, callback);
  }

  public componentWillLeave(callback) {
    close(this.overlayRef.current, this.windowRef.current, callback);
  }

  public render() {
    const { onRequestClose, children, content, showCloseButton } = this.props;
    const Component = content && content.component;
    const componentProps = (content && content.props) || {};
    return (
      <Portal>
        <Container>
          <Overlay innerRef={this.overlayRef} onClick={onRequestClose} />
          <Window innerRef={this.windowRef}>
            {showCloseButton && <CloseButton onClick={onRequestClose} inverted={true} icon={IconClose} />}
            {children || <Component {...componentProps} /> || null}
          </Window>
        </Container>
      </Portal>
    );
  }
}

export default ModalComponent;
