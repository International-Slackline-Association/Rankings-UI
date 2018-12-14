import { APIRankingCategoriesResponse } from '../categories';

const generator = (): APIRankingCategoriesResponse => {
  return {
    items: [
      {
        title: 'Discipline',
        selectedValue: '0',
        options: [
          {
            value: '0',
            label: 'Overall',
            inlineLevel: 0,
          },
          {
            value: '-',
            label: 'Freestyle',
            inlineLevel: 1,
            isContainerStyle: true,
          },
          {
            value: '1',
            label: 'Trickline',
            inlineLevel: 2,
          },
          {
            value: '2',
            label: 'Aerial',
            inlineLevel: 3,
          },
          {
            value: '3',
            label: 'Jib-Static',
            inlineLevel: 3,
          },
          {
            value: '4',
            label: 'Transfer Single',
            inlineLevel: 3,
          },
          {
            value: '6',
            label: 'Contact(High/Long/Waterline)',
            inlineLevel: 2,
          },
          {
            value: '-',
            label: 'Walking',
            inlineLevel: 1,
            isContainerStyle: true,
          },
          {
            value: '7',
            label: 'Speedline',
            inlineLevel: 2,
          },
          {
            value: '8',
            label: 'Sprint',
            inlineLevel: 3,
          },
          {
            value: '9',
            label: 'High/Long/Waterline',
            inlineLevel: 3,
          },
          {
            value: '10',
            label: 'Endurance',
            inlineLevel: 2,
          },
          {
            value: '11',
            label: 'Blind',
            inlineLevel: 2,
          },
          {
            value: '12',
            label: 'Rigging',
            inlineLevel: 1,
          },
        ],
      },
      {
        title: 'Years',
        selectedValue: '2018',
        options: [
          {
            value: '2018',
            label: '2018',
          },
          {
            value: '2017',
            label: '2017',
          },
        ],
      },
      {
        title: 'Gender',
        selectedValue: '0',
        options: [
          {
            value: '0',
            label: 'All',
          },
          {
            value: '1',
            label: 'Men',
            inlineLevel: 1,
          },
          {
            value: '2',
            label: 'Women',
            inlineLevel: 1,
          },
        ],
      },
      {
        title: 'AgeCategory',
        selectedValue: '0',
        options: [
          {
            value: '0',
            label: 'All',
          },
          {
            value: '1',
            label: 'Youth',
            inlineLevel: 1,
          },
        ],
      },
    ],
  };
};

export default generator;
