import styled, { colors } from 'styles/styled-components';

import * as React from 'react';
import media from 'styles/media';
import { TinyLoading } from '../Loading';
import { lighten } from 'polished';

const classNames: any = {
  container: 'react-autosuggest__container',
  input: 'react-autosuggest__input',
  input_focused: 'react-autosuggest__input--focused',
  input_open: '.react-autosuggest__input--open',
  container_open: 'react-autosuggest__suggestions-container--open',
  suggestion_list: 'react-autosuggest__suggestions-list',
  suggestion: 'react-autosuggest__suggestion',
  section_container_first: 'react-autosuggest__section-container--first',
  suggestion_highlighted: 'react-autosuggest__suggestion--highlighted',
};

interface Props {
  isLoading: boolean;
}

export const AutosuggestWrapper: React.SFC<Props> = props => {
  return (
    <Wrapper>
      <AutosuggestWrapperDiv>{props.children}</AutosuggestWrapperDiv>
      {props.isLoading && (
        <Empty>
          <TinyLoading />
        </Empty>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  position: relative;
  margin-left: 1.2em;
  margin-top: 1.2em;
`;

const Empty = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  right: 10px;
  align-items: center;
  align-self: center;
  font-weight: normal;
  color: ${props => props.theme.textSecondary};
  padding: 0 8px;
  text-align: center;
`;

export const AutosuggestWrapperDiv = styled.div.attrs(classNames)`
  display: flex;
  align-items: center;
    .${classNames.suggestion_list} {
      margin: 0;
      padding: 0;
      list-style-type: none;
    }
    .${classNames.suggestion} {
      cursor: pointer;
      padding: 10px 20px;
      color: ${props => props.theme.textPrimary}
    }
    .${classNames.suggestion_highlighted} {
      background-color: ${props => props.theme.divider};
    }
  `;
