import { APIGetContestSuggestionsResponse } from '../suggestions';

const generator = (): APIGetContestSuggestionsResponse => {
  return {
    items: [
      {
        id: '1',
        name: 'Swiss Slackline Championship',
        discipline: { id: 2, name: 'Aerial' },
        year: 2015,
        gender: { id: 0, name: 'Mixed' },
      },
      {
        id: '2',
        name: 'China Master',
        discipline: { id: 2, name: 'Aerial' },
        year: 2015,
        gender: { id: 0, name: 'Mixed' },
      },
      {
        id: '3',
        name: 'Swiss Open',
        discipline: { id: 2, name: 'Aerial' },
        year: 2015,
        gender: { id: 0, name: 'Mixed' },
      },
      {
        id: '4',
        name: 'Redbull Slackship',
        discipline: { id: 2, name: 'Aerial' },
        year: 2015,
        gender: { id: 0, name: 'Mixed' },
      },
    ],
  };
};

export default generator;
