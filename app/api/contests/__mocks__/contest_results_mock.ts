import { APIContestResultsResponse } from '../contest-results';

const generator = (): APIContestResultsResponse => {
  return {
    items: [
      {
        id: 'can-sahin',
        rank: 1,
        name: 'Can',
        surname: 'Sahin',
        age: 27,
        country: 'TR',
        points: 240,
        thumbnailUrl:
          // tslint:disable-next-line:max-line-length
          'https://scontent.fsaw1-9.fna.fbcdn.net/v/t31.0-8/11021292_10153626177784202_311162237992041659_o.jpg?_nc_cat=101&_nc_ht=scontent.fsaw1-9.fna&oh=9015a73d27b2a9e08c09af4b04403897&oe=5CD75C62',
      },
      {
        id: 'thomas-buckingham',
        rank: 2,
        name: 'Thomas',
        surname: 'Buckingham',
        age: 32,
        country: 'CH',
        points: 230,
        thumbnailUrl:
          'http://www.slackattack.ch/wp-content/uploads/2015/11/Vorstand_Tom.jpg',
      },
      {
        id: 'snould-veryLongSurname',
        rank: 3,
        name: 'Snould',
        surname: 'VeryLongSurname',
        age: 30,
        country: 'AU',
        points: 220,
        thumbnailUrl:
          'http://www.slackattack.ch/wp-content/uploads/2015/11/Vorstand_Tom.jpg',
      },
      {
        id: 'marc-thompson',
        rank: 4,
        name: 'Marc',
        surname: 'Thompson',
        age: 25,
        country: 'CH',
        points: 200,
        thumbnailUrl: '',
      },
      {
        id: 'lukas-irmler',
        rank: 5,
        name: 'Lukas',
        surname: 'Irmler',
        age: 30,
        country: 'DE',
        points: 190,
        thumbnailUrl:
          'http://www.slackattack.ch/wp-content/uploads/2015/11/Vorstand_Tom.jpg',
      },
      {
        id: 'samuel-volery',
        rank: 6,
        name: 'Samuel',
        surname: 'Volery',
        age: 33,
        country: 'CH',
        points: 180,
        thumbnailUrl: '',
      },
    ],
    next: { a: true },
  };
};

export default generator;
