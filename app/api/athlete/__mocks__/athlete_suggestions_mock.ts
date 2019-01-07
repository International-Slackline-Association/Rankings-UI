import { APIGetAthleteSuggestionsResponse } from '../suggestions';

const generator = (): APIGetAthleteSuggestionsResponse => {
  return {
    items: [
      {
        id: '1',
        name: 'Can',
        surname: 'Sahin',
        email: 'email',
      },
      {
        id: '2',
        name: 'Thomas',
        surname: 'Buckingham',
        email: 'email',
      },
      {
        id: '3',
        name: 'Samuel',
        surname: 'Volery',
        email: 'email',
      },
      {
        id: '4',
        name: 'Lukas',
        surname: 'Irmler',
        email: 'email',
      },
    ],
  };
};

export default generator;
