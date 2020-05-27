import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { TopBarTabsState, TopBarTabsItem } from './types';
import { TopBarTabType, TopBarTabContentType } from 'types/enums';
import { changeSelectedIdsName } from './utils';

export const initialState: TopBarTabsState = {
  items: [
    {
      id: '-2',
      name: 'Rankings',
      type: TopBarTabType.Static,
      contentType: TopBarTabContentType.rankings,
    },

    {
      id: '-1',
      name: 'Contests',
      type: TopBarTabType.Static,
      contentType: TopBarTabContentType.contests,
    },
  ],
  selectedId: '-2',
  selectedDiscipline: null,
};

const topBarTabsSlice = createSlice({
  name: 'topBarTabs',
  initialState,
  reducers: {
    changeTopBarIndex(state, action: PayloadAction<string>) {
      state.selectedId = action.payload;
    },
    addTopBarTab(state, action: PayloadAction<TopBarTabsItem>) {
      state.items.concat(action.payload);
    },
    setTopBarTabs(state, action: PayloadAction<TopBarTabsItem[]>) {
      state.items = action.payload;
    },
    changeTopBarName(
      state,
      action: PayloadAction<{ id: string; name: string }>,
    ) {
      state.items = changeSelectedIdsName(
        state.items,
        action.payload.id,
        action.payload.name,
      );
    },
  },
});

export const { actions, reducer, name: sliceKey } = topBarTabsSlice;
