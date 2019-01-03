import { APIAdminSubmitContestResultsResponse } from '../submit';

const generator = (): APIAdminSubmitContestResultsResponse => {
  return {
    success: true,
    errorMessage: 'Some error occured',
  };
};

export default generator;
