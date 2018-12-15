import { APIGetCountrySuggestionsResponse } from '../countrySuggestions';

const generator = (): APIGetCountrySuggestionsResponse => {
  return {
    items: [
      {
        code: 'tr',
        name: 'Turkey',
      },
      {
        code: 'ch',
        name: 'Switzerland',
      },
      {
        code: 'at',
        name: 'Austria',
      },
      {
        code: 'de',
        name: 'Germany',
      },
    ],
  };
};

export default generator;
