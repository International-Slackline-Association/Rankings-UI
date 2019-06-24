import { UISelectOption } from 'types/application';

export interface ICategoryEntity {
  readonly title: string;
  readonly options: UISelectOption[];
  readonly selectedValue: string;
}

export interface ICategory extends ICategoryEntity {
  categorySelected(value: string): void;
}

export interface IFilterEntity {
  readonly title: string;
  readonly placeholder: string;
  readonly suggestions?: UISelectOption[];
  readonly selectedOption?: UISelectOption;
}

export interface IFilter extends IFilterEntity {
  loadSuggestions(searchValue: string): void;
  suggestionSelected(suggestion: UISelectOption): void;
}

export type CategoryType = 'World' | 'Discipline' | 'Year' | 'People' | 'Age'