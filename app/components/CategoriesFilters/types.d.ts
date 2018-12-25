export interface ICategoryEntity {
  readonly title: string;
  readonly options: ISelectOption[];
  readonly selectedValue: string;
}

export interface ICategory extends ICategoryEntity {
  categorySelected(value: string): void;
}

export interface IFilterEntity {
  readonly title: string;
  readonly placeholder: string;
  readonly suggestions?: ISelectOption[];
  readonly selectedValue?: string;
}

export interface IFilter extends IFilterEntity {
  loadSuggestions(searchValue: string): void;
  suggestionSelected(suggestion: ISelectOption): void;
  // clearSuggestions(value: string);
}

export interface ISelectOption {
  readonly value: string;
  readonly label: string;
  readonly isContainerStyle?: boolean;
  readonly inlineLevel?: number;
}
