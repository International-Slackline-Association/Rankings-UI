export interface ICategoryEntity {
  title: string;
  options: ISelectOption[];
  selectedValue: string;
}

export interface ICategory extends ICategoryEntity {
  categorySelected(value: string): void;
}

export interface IFilterEntity {
  title: string;
  placeholder: string;
  suggestions?: ISelectOption[];
  selectedValue?: string;
}

export interface IFilter extends IFilterEntity {
  loadSuggestions(searchValue: string): void;
  suggestionSelected(suggestion: ISelectOption): void;
  // clearSuggestions(value: string);
}

export interface ISelectOption {
  value: string;
  label: string;
  isContainerStyle?: boolean;
  inlineLevel?: number;
}
