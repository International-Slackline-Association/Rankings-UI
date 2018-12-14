export interface ICategoryEntity {
  title: string;
  options: ISelectOption[];
  selectedValue: string;
}

interface ICategory extends ICategoryEntity {
  categorySelected(value: string): void;
}

interface IFilterEntity {
  title: string;
  placeholder: string;
  suggestions?: ISelectOption[];
}

interface IFilter extends IFilterEntity {
  loadSuggestions(searchValue: string): void;
  suggestionSelected(value: string): void;
  // clearSuggestions(value: string);
}

interface ISelectOption {
  value: string;
  label: string;
  isContainerStyle?: boolean;
  inlineLevel?: number;
}
