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
  readonly selectedValue?: string;
}

export interface IFilter extends IFilterEntity {
  loadSuggestions(searchValue: string): void;
  suggestionSelected(suggestion: UISelectOption): void;
  // clearSuggestions(value: string);
}
