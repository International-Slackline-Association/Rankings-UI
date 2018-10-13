import countries from '../GenericTabContent/countries';
import { FilterItem } from 'containers/GenericTabContent/FilterItem';
import { DropdownFilter } from 'containers/GenericTabContent/types';

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

  return result;
}
