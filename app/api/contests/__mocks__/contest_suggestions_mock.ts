import { APIGetContestSuggestionsResponse } from '../suggestions';

const generator = (): APIGetContestSuggestionsResponse => {
  return {
    items: [
      {
        id: '1',
        name: 'Swiss Slackline Championship',
        discipline: { id: 2, name: 'Aerial' },
        year: 2015,
      },
      {
        id: '2',
        name: 'China Master',
        discipline: { id: 2, name: 'Aerial' },
        year: 2015,
      },
      {
        id: '3',
        name: 'Swiss Open',
        discipline: { id: 2, name: 'Aerial' },
        year: 2015,
      },
      {
        id: '4',
        name: 'Redbull Slackship',
        discipline: { id: 2, name: 'Aerial' },
        year: 2015,
      },
    ],
  };
};

export default generator;
