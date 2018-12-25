import { Auth } from 'aws-amplify';

import './configure';

async function cognitoOptions() {
  const currentSession = await Auth.currentSession();
  return {
    headers: {
      Authorization: currentSession.getIdToken().getJwtToken(),
    },
  };
}

export default cognitoOptions;
