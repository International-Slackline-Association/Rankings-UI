import { Auth } from 'aws-amplify';

import './configure';

async function cognitoUser() {
  return Auth.currentUserInfo();
}

export default cognitoUser;
