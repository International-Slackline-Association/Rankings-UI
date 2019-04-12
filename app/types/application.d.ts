export interface ISelectOption {
  value: string;
  label: string;
}

export interface UISelectOption extends ISelectOption {
  isContainerStyle?: boolean;
  inlineLevel?: number;
}
export interface Discipline {
  id: number;
  name: string;
}

export interface Gender {
  id: number;
  name: string;
}

export interface ContestType {
  id: number;
  name: string;
}

export interface ContestGender {
  id: number;
  name: string;
}
