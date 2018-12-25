import { Auth } from 'aws-amplify';
import { CognitoUser } from 'amazon-cognito-identity-js';
import { CustomError } from 'utils/error';

import './configure';
async function signin(email: string, password: string) {
  return Auth.signIn(email, password)
    .then((user: CognitoUser) => ({
      username: user.getUsername(),
    }))
    .catch(error => {
      throw new CustomError({
        message: error.message,
        data: error.code,
      });
    });
}

export default signin;
