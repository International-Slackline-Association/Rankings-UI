import * as React from 'react';
import ReactDOM from 'react-dom';

const root: any = document.body;

interface PortalProps {}

class Portal extends React.PureComponent<PortalProps> {
  constructor(props) {
    super(props);
  }

  public componentDidMount() {
    root.appendChild(this.el);
  }

  public componentWillUnmount() {
    root.removeChild(this.el);
  }

  private el = document.createElement('div');

  public render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.el,
    );
  }
}

export default Portal;
