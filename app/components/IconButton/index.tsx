import * as React from 'react';
import Wrapper from './Wrapper';

interface OwnProps {
  icon: any;
}

class IconButton extends React.PureComponent<OwnProps> {
  public render() {
    const { icon } = this.props;
    const Icon: any = icon;
    return (
      <Wrapper {...this.props}><Icon /></Wrapper>
    );
  }
}

export default IconButton;
