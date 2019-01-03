import { APIGetAthleteResponse } from '..';

const generator = (): APIGetAthleteResponse => {
  return {
    athlete: {
      id: 'thomas-buckingham',
      name: 'Thomas',
      surname: 'Buckingham',
      age: 32,
      country: 'Switzerland',
      overallRank: 2,
      profileUrl:
        'http://www.slackattack.ch/wp-content/uploads/2015/11/Vorstand_Tom.jpg',
      infoUrl: 'https://www.facebook.com/events/529600260719152',
    },
  };
};

export default generator;
