import { APIGetAthleteSuggestionsResponse } from '../suggestions';

const generator = (): APIGetAthleteSuggestionsResponse => {
  return {
    items: [
      {
        id: '1',
        name: 'Can Sahin',
        email: 'email',
      },
      {
        id: '2',
        name: 'Thomas Buckingham',
        email: 'email',
      },
      {
        id: '3',
        name: 'Samuel Volery',
        email: 'email',
      },
      {
        id: '4',
        name: 'Lukas Irmler',
        email: 'email',
      },
    ],
  };
};

export default generator;
