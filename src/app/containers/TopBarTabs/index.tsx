import React, { useEffect, useCallback } from 'react';
import { TopBarButton } from 'app/components/TopBarButton';
import { TopBarTabType, TopBarTabContentType } from 'types/enums';

import Background from './Background';
import { useHistory, useLocation } from 'react-router-dom';
import { selectTabItems, selectSelectedId } from './selectors';
import { useSelector, useDispatch } from 'react-redux';
import { sliceKey, reducer, actions } from './slice';
import { useInjectReducer } from 'utils/redux-injectors';
import { modifyTabBarItemsByURL, findPathAndId } from './utils';

interface Props {}

export function TopBarTabs(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });

  const tabItems = useSelector(selectTabItems);
  const selectedId = useSelector(selectSelectedId);
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();

  const modifyItemsByUrl = useCallback(
    (locationPath: string) => {
      if (locationPath) {
        const items = modifyTabBarItemsByURL(tabItems, locationPath);
        dispatch(actions.setTopBarTabs(items));

        const { id } = findPathAndId(locationPath);
        if (id) {
          dispatch(actions.changeTopBarIndex(id));
        }
      }
    },
    [dispatch, tabItems],
  );

  useEffect(() => {
    modifyItemsByUrl(location.pathname);
  }, [location.pathname, modifyItemsByUrl]);

  const onButtonSelect = (
    id: string,
    contentType: TopBarTabContentType,
    discipline: string,
  ) => {
    const path = contentType;
    const idParam = id === '-2' || id === '-1' ? '' : id;
    if (id) {
      if (discipline) {
        history.push(`/${path}/${idParam}/${discipline}`);
      } else {
        history.push(`/${path}/${idParam}`);
      }
    } else {
      history.push(`/${path}`);
    }
  };

  return (
    <Background>
      {tabItems.map((item, index) => {
        return (
          <TopBarButton
            key={item.id}
            id={item.id}
            name={item.name}
            discipline={item.discipline}
            type={item.type}
            contentType={item.contentType}
            onSelect={onButtonSelect}
            isSelected={item.id === selectedId}
            isFirstDynamicTab={
              item.type === TopBarTabType.Dynamic &&
              tabItems[index - 1].type === TopBarTabType.Static
            }
          />
        );
      })}
    </Background>
  );
}
