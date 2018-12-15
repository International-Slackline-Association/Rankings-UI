import { APIGetContestSuggestionsResponse } from '../suggestions';

const generator = (): APIGetContestSuggestionsResponse => {
  return {
    items: [
      {
        id: '1',
        name: 'Swiss Slackline Championship',
      },
      {
        id: '2',
        name: 'China Master',
      },
      {
        id: '3',
        name: 'Swiss Open',
      },
      {
        id: '4',
        name: 'Redbull Slackship',
      },
    ],
  };
};

export default generator;
