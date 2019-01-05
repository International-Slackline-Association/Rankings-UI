import { APIAdminGetContestResponse } from '..';

const generator = (): APIAdminGetContestResponse => {
  return {
    contest: {
      id: 'swiss-open_2017',
      name: 'Swiss Open',
      profileUrl:
        'http://www.slackattack.ch/wp-content/uploads/2015/11/Vorstand_Tom.jpg',
      country: 'tr',
      date: '2017-10-25',
      city: 'Bern',
      contestCategory: { id: 3, name: 'Open' },
      discipline: { id: 2, name: 'Trickline Aerial' },
      prize: 1,
      infoUrl: 'https://www.facebook.com/events/529600260719152',
    },
  };
};

export default generator;
