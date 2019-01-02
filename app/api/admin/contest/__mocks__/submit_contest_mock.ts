import { APIAdminSubmitContestResponse } from '../submit';

const generator = (): APIAdminSubmitContestResponse => {
  return {
    id: '1',
    success: true,
    errorMessage: 'Some Error Occured',
  };
};

export default generator;
