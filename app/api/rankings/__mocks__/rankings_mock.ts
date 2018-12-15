import { APIRankingsResponse } from '../results';

const resultsDefaultGenerator = (): APIRankingsResponse => {
  return {
    items: [
      {
        id: 'can-sahin',
        rank: 1,
        name: 'Can',
        surname: 'Sahin',
        age: 27,
        country: 'TR',
        points: '240',
        overallRank: 1,
        topDisciplines: ['Freestyle', 'Highline'],
        profileUrl:
          // tslint:disable-next-line:max-line-length
          'https://scontent-ams3-1.cdninstagram.com/vp/401008e3ae8d67f3922cc63d7b863fec/5C18CB5B/t51.2885-15/sh0.08/e35/c180.0.720.720/s640x640/37960412_802453559925345_1127308561626431488_n.jpg',
      },
      {
        id: 'thomas-buckingham',
        rank: 2,
        name: 'Thomas',
        surname: 'Buckingham',
        age: 32,
        country: 'CH',
        points: '230',
        overallRank: 2,
        topDisciplines: ['Waterline', 'Speedline'],
        profileUrl:
          'http://www.slackattack.ch/wp-content/uploads/2015/11/Vorstand_Tom.jpg',
      },
      {
        id: 'snould-veryLongSurname',
        rank: 3,
        name: 'Snould',
        surname: 'VeryLongSurname',
        age: 30,
        country: 'AU',
        points: '220',
        overallRank: 3,
        topDisciplines: ['Highline'],
        profileUrl:
          'http://www.slackattack.ch/wp-content/uploads/2015/11/Vorstand_Tom.jpg',
      },
      {
        id: 'marc-thompson',
        rank: 4,
        name: 'Marc',
        surname: 'Thompson',
        age: 25,
        country: 'CH',
        points: '200',
        overallRank: 4,
        topDisciplines: ['Speedline'],
        profileUrl:
          'http://www.slackattack.ch/wp-content/uploads/2015/11/Vorstand_Tom.jpg',
      },
      {
        id: 'lukas-irmler',
        rank: 5,
        name: 'Lukas',
        surname: 'Irmler',
        age: 30,
        country: 'DE',
        points: '190',
        overallRank: 5,
        topDisciplines: ['Freestyle', 'Endurance'],
        profileUrl:
          'http://www.slackattack.ch/wp-content/uploads/2015/11/Vorstand_Tom.jpg',
      },
      {
        id: 'samuel-volery',
        rank: 6,
        name: 'Samuel',
        surname: 'Volery',
        age: 33,
        country: 'CH',
        points: '180',
        overallRank: 6,
        topDisciplines: ['Freestyle'],
        profileUrl:
          'http://www.slackattack.ch/wp-content/uploads/2015/11/Vorstand_Tom.jpg',
      },
    ],
    next: { a: true },
  };
};

export default resultsDefaultGenerator;
