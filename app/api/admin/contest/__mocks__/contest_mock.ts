import { APIAdminGetContestResponse } from '..';

const generator = (): APIAdminGetContestResponse => {
  return {
    contest: {
      id: 'thomas-buckingham',
      name: 'Thomas',
      profileUrl:
        'http://www.slackattack.ch/wp-content/uploads/2015/11/Vorstand_Tom.jpg',
      country: 'tr',
      date: '2017-10-25',
      city: 'Bern',
      contestCategory: {id: 0, name: 'World Games'},
      discipline: {id: 3, name: 'Trickline Aerial'},
      prize: 0,
    },
  };
};

export default generator;
