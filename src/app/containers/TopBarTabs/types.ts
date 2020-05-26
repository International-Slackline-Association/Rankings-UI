import { TopBarTabType, TopBarTabContentType } from 'types/enums';

/* --- STATE --- */
export interface TopBarTabsState {
  readonly items: TopBarTabsItem[];
  readonly selectedId: string;
  readonly selectedDiscipline: string | null;
}

export interface TopBarTabsItem {
  readonly id: string;
  readonly discipline?: string;
  readonly name: string;
  readonly type: TopBarTabType;
  readonly contentType: TopBarTabContentType;
}
