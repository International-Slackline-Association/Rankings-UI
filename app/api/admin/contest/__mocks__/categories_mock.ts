import { APIAdminGetCategoriesResponse } from '../categories';

const generator = (): APIAdminGetCategoriesResponse => {
  return {
    categories: [
      {
        value: '0',
        label: 'World Games',
      },
      {
        value: '1',
        label: 'Open Challenge',
      },
    ],
  };
};

export default generator;
