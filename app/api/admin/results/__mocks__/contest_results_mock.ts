import { APIAdminResultsResponse } from '..';

const generator = (): APIAdminResultsResponse => {
  return {
    items: [
      {
        id: 'joshua-leupolz',
        name: 'Joshua',
        surname: 'Leupolz',
        place: 3,
        points: 0,
      },
    ],
  };
};

export default generator;
