import { APIAdminGetDisciplinesResponse } from '../disciplines';

const generator = (): APIAdminGetDisciplinesResponse => {
  return {
    disciplines: [
      {
        value: '2',
        label: 'Trickline - Aerial',
      },
      {
        value: '3',
        label: 'Trickline - Jib-Static',
      },
    ],
  };
};

export default generator;
