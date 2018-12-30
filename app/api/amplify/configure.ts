import Amplify from 'aws-amplify';

Amplify.configure({
  Auth: {
    identityPoolId: process.env.IDENTITY_POOL_ID,
    region: process.env.REGION,
    userPoolId: process.env.USER_POOL_ID,
    userPoolWebClientId: process.env.USER_POOL_WEB_CLIENT_ID,
  },
  Storage: {
    bucket: 'isa.rankings.images',
    region: process.env.REGION,
  },
  API: {
    endpoints: [
      {
        name: 'ApiGateway',
        endpoint: process.env.API_GATEWAY_ENDPOINT,
        service: 'lambda',
        region: process.env.REGION,
      },
    ],
  },
});
