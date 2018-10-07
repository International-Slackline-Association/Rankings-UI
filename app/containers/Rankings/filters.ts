import countries from './countries';
import { DropdownFilter } from './types';

export function defaultFilters(markDefaultsAsSelected = true): DropdownFilter[] {
  const result: DropdownFilter[] = [];

  let category = 'Discipline';
  result.push({
    category: category,
    items: [
      new FilterItem(category, 'Overall', markDefaultsAsSelected ? true : false, true),
      new FilterItem(category, 'Highline', false, true),
      new FilterItem(category, 'Waterline', false, true),
      new FilterItem(category, 'Speedline', false, true),
      new FilterItem(category, 'Trickline', false, true),
      new FilterItem(category, 'Freestyle', false, true),
    ],
  });

  category = 'Year';
  result.push({
    category: category,
    items: [
      new FilterItem(category, 'All Years', false, true),
      new FilterItem(category, '2018', markDefaultsAsSelected ? true : false, true),
      new FilterItem(category, '2017', false, true),
    ],
  });
  category = 'Gender';
  result.push({
    category: category,
    items: [new FilterItem(category, 'Men'), new FilterItem(category, 'Women')],
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
  public isSticky: boolean;

  public get id() {
    return this.category + '-' + this.name;
  }

  constructor(category: string, name: string, isSelected = false, isSticky = false) {
    this.category = category;
    this.name = name;
    this.isSelected = isSelected;
    this.isSticky = isSticky;
  }
}
