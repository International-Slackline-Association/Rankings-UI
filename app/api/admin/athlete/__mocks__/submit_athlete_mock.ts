import { APIAdminSubmitAthleteResponse } from '../submit';

const generator = (): APIAdminSubmitAthleteResponse => {
  return {
    id: '1',
    success: true,
    errorMessage: 'Some Error Occured',
  };
};

export default generator;
