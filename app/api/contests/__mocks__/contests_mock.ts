import { APIGetContestsResponse } from '../types';

const resultsDefaultGenerator = (): APIGetContestsResponse => {
  return {
    items: [
      {
        id: 'swiss-open_2018',
        name: 'Swiss Open',
        date: 1539383654,
        city: 'Bern',
        country: 'Switzerland',
        prize: '400€',
        size: '40',
        disciplines: ['Freestyle', 'Highline'],
        profileUrl:
          // tslint:disable-next-line:max-line-length
          'https://scontent-mxp1-1.xx.fbcdn.net/v/t1.0-9/18922028_1381229651962030_8607224956463366700_n.jpg?_nc_cat=107&oh=94312c53ae0b5745939e6e91ecbc1856&oe=5C4A3E47',
      },
      {
        id: 'china-masters_2018',
        name: 'China Master',
        date: 1539383654,
        city: 'Shanghai',
        country: 'China',
        prize: '300€',
        size: '30',
        disciplines: ['Freestyle', 'Highline', 'Waterline', 'Trickline'],
        profileUrl:
          // tslint:disable-next-line:max-line-length
          'https://scontent-mxp1-1.xx.fbcdn.net/v/t1.0-9/18922028_1381229651962030_8607224956463366700_n.jpg?_nc_cat=107&oh=94312c53ae0b5745939e6e91ecbc1856&oe=5C4A3E47',
      },
      {
        id: 'redbull-slackship_2018',
        name: 'Redbull Slackship',
        date: 1539383654,
        city: 'Warsaw',
        country: 'Poland',
        prize: '300€',
        size: '30',
        disciplines: ['Trickline'],
        profileUrl:
          // tslint:disable-next-line:max-line-length
          'https://scontent-mxp1-1.xx.fbcdn.net/v/t1.0-9/18922028_1381229651962030_8607224956463366700_n.jpg?_nc_cat=107&oh=94312c53ae0b5745939e6e91ecbc1856&oe=5C4A3E47',
      },
    ],
    isNextPageAvailable: false,
  };
};

export default resultsDefaultGenerator;
