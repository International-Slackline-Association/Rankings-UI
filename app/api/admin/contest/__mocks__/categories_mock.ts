import { APIAdminGetCategoriesResponse } from '../categories';

const generator = (): APIAdminGetCategoriesResponse => {
  return {
    categories: [
      {
        value: '2',
        label: 'World Games',
      },
      {
        value: '3',
        label: 'Open Challenge',
      },
    ],
  };
};

export default generator;
