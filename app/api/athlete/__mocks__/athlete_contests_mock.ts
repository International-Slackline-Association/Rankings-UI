import { APIAthleteContestsResponse } from '../athlete-contests';

const generator = (): APIAthleteContestsResponse => {
  return {
    items: [
      {
        id: 'swiss-open_2018',
        name: 'Swiss Open',
        date: '2015-10-17',
        rank: 1,
        contestType: { id: 2, name: 'Open Challenge' },
        discipline: { id: 2, name: 'Aerial' },
        smallProfileUrl:
          // tslint:disable-next-line:max-line-length
          'https://scontent-mxp1-1.xx.fbcdn.net/v/t1.0-9/18922028_1381229651962030_8607224956463366700_n.jpg?_nc_cat=107&oh=94312c53ae0b5745939e6e91ecbc1856&oe=5C4A3E47',
      },
      {
        id: 'china-masters_2018',
        name: 'China Master',
        date: '2015-11-17',
        rank: 3,
        contestType: { id: 2, name: 'Masters' },
        discipline: { id: 2, name: 'Aerial' },
        smallProfileUrl:
          // tslint:disable-next-line:max-line-length
          '',
      },
      {
        id: 'redbull-slackship_2018',
        name: 'Redbull Slackship',
        date: '2015-12-17',
        rank: 12,
        contestType: { id: 2, name: 'Masters' },
        discipline: { id: 2, name: 'Aerial' },
        smallProfileUrl:
          // tslint:disable-next-line:max-line-length
          'https://scontent-mxp1-1.xx.fbcdn.net/v/t1.0-9/18922028_1381229651962030_8607224956463366700_n.jpg?_nc_cat=107&oh=94312c53ae0b5745939e6e91ecbc1856&oe=5C4A3E47',
      },
    ],
    next: { a: true },
  };
};

export default generator;
