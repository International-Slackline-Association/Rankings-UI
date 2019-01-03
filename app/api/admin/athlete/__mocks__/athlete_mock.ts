import { APIAdminGetAthleteResponse } from '..';

const generator = (): APIAdminGetAthleteResponse => {
  return {
    athlete: {
      id: 'thomas-buckingham',
      name: 'Thomas',
      surname: 'Buckingham',
      profileUrl:
        'http://www.slackattack.ch/wp-content/uploads/2015/11/Vorstand_Tom.jpg',
      country: 'tr',
      gender: 2,
      birthdate: '2017-10-25',
      email: 'test@test.com',
      city: 'Bern',
      infoUrl: 'https://www.facebook.com/events/529600260719152/',
    },
  };
};

export default generator;
