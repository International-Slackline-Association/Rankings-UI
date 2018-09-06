import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import TopBarTabs from 'containers/TopBarTabs';
import TabContent from 'components/TabContent';

export default class HomePage extends React.PureComponent {
  public render() {
    return <TabContent />;
  }
}
