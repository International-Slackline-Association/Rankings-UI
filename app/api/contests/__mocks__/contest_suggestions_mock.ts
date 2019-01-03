import { APIGetContestSuggestionsResponse } from '../suggestions';

const generator = (): APIGetContestSuggestionsResponse => {
  return {
    items: [
      {
        id: '1',
        name: 'Swiss Slackline Championship',
        discipline: { id: 2, name: 'Aerial' },
      },
      {
        id: '2',
        name: 'China Master',
        discipline: { id: 2, name: 'Aerial' },
      },
      {
        id: '3',
        name: 'Swiss Open',
        discipline: { id: 2, name: 'Aerial' },
      },
      {
        id: '4',
        name: 'Redbull Slackship',
        discipline: { id: 2, name: 'Aerial' },
      },
    ],
  };
};

export default generator;
