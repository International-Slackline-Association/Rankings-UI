/*
 *
 * LanguageProvider
 *
 * this component connects the redux state language locale to the
 * IntlProvider component and i18n messages (loaded from `app/translations`)
 */

import * as React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { IntlProvider } from 'react-intl';

import { makeSelectLocale } from './selectors';

interface IProps {
  locale?: string;
  messages: { [locale: string]: { [id: string]: string } };
  children?: React.ReactNode;
}

export class LanguageProvider extends React.PureComponent<IProps, {}> {
  public render() {
    return (
      <IntlProvider
        locale={this.props.locale}
        key={this.props.locale}
        messages={this.props.messages[this.props.locale]}
      >
        {React.Children.only(this.props.children)}
      </IntlProvider>
    );
  }
}

const mapStateToProps = createSelector(makeSelectLocale(), locale => ({
  locale,
}));

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}
export default connect<{}, {}, IProps>(
  mapStateToProps,
  mapDispatchToProps,
)(LanguageProvider);
