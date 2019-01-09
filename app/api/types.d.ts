import { UISelectOption } from 'types/application';

export interface CategoryItem {
  title: string;
  options: UISelectOption[];
  selectedValue: string;
}
