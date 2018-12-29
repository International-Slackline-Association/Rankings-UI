import { APIAdminGetAthleteResponse } from '..';

const generator = (): APIAdminGetAthleteResponse => {
  return {
    athlete: {
      id: 'thomas-buckingham',
      name: 'Thomas',
      surname: 'Buckingham',
    },
  };
};

export default generator;
