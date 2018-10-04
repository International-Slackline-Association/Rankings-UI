import countries from './countries';

interface DropdownFilter {
  category: string;
  items: FilterItem[];
}

export function defaultFilters(): DropdownFilter[] {
  const result: DropdownFilter[] = [];

  let category = 'Discipline';
  result.push({
    category: category,
    items: [
      new FilterItem(category, 'Overall'),
      new FilterItem(category, 'Highline'),
      new FilterItem(category, 'Waterline'),
      new FilterItem(category, 'Speedline'),
      new FilterItem(category, 'Trickline'),
      new FilterItem(category, 'Freestyle'),
    ],
  });

  category = 'Year';
  result.push({
    category: category,
    items: [new FilterItem(category, 'All Years'), new FilterItem(category, '2018'), new FilterItem(category, '2017')],
  });

  category = 'Gender';
  result.push({
    category: category,
    items: [new FilterItem(category, 'Men&Women'), new FilterItem(category, 'Men'), new FilterItem(category, 'Women')],
  });

  category = 'Country';
  result.push({
    category: category,
    items: countries.map(country => {
      return new FilterItem(category, country.name);
    }),
  });

  category = 'Continent';
  result.push({
    category: category,
    items: [
      new FilterItem(category, 'Europe'),
      new FilterItem(category, 'North America'),
      new FilterItem(category, 'South America'),
      new FilterItem(category, 'Asia'),
      new FilterItem(category, 'Australia'),
      new FilterItem(category, 'Africa'),
    ],
  });

  category = 'Age';
  result.push({
    category: category,
    items: [new FilterItem(category, 'Youth')],
  });

  return result;
}

export class FilterItem {
  public category: string;
  public name: string;
  public isSelected: boolean;

  public get id() {
    return this.category + '-' + this.name;
  }

  constructor(category: string, name: string, isSelected = false) {
    this.category = category;
    this.name = name;
    this.isSelected = isSelected;
  }
}
