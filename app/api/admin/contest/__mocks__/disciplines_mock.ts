import { APIAdminGetDisciplinesResponse } from '../disciplines';

const generator = (): APIAdminGetDisciplinesResponse => {
  return {
    disciplines: [
      {
        value: '1',
        label: 'Trickline - Aerial',
      },
      {
        value: '2',
        label: 'Trickline - Jib-Static',
      },
    ],
  };
};

export default generator;
