import * as React from 'react';
import { connect } from 'react-redux';
import { compose, Dispatch } from 'redux';
import { replace, push } from 'connected-react-router';
import { RouteComponentProps } from 'react-router';
import { Helmet } from 'react-helmet';
import DisciplineSection from './DisciplineSection';
import { Wrapper } from './Wrapper';
import MainSection from './MainSection';

interface OwnProps extends RouteComponentProps {}

interface StateProps {}

interface DispatchProps {
  updateLocation(path: string, id: string): void;
}

type Props = StateProps & DispatchProps & OwnProps;

interface State {}

class Homepage extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  private onAthleteClick = (id: string) => {
    this.props.updateLocation('athlete', id);
  };

  public render() {
    return (
      <React.Fragment>
        <Helmet>
          {/* <title>Slackline Rankings</title> */}
          <meta name="description" content="Slackline Ranking List" />
        </Helmet>
        <Wrapper>
          <MainSection />
          <DisciplineSection />
        </Wrapper>
      </React.Fragment>
    );
  }
}

function mapDispatchToProps(
  dispatch: Dispatch,
  ownProps: OwnProps,
): DispatchProps {
  return {
    updateLocation: (path: string, id: string) => {
      if (id) {
        dispatch(push(`/${path}/${id}`));
      }
    },
  };
}

const withConnect = connect(mapDispatchToProps);

export default compose(withConnect)(Homepage);
