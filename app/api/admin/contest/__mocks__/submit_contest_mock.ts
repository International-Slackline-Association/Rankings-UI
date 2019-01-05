import { APIAdminSubmitContestResponse } from '../submit';

const generator = (): APIAdminSubmitContestResponse => {
  return {
    id: '1',
    discipline: 3,
  };
};

export default generator;
