import styled, { colors } from 'styles/styled-components';
import searchIconSvg = require('./search.svg?file');

import * as React from 'react';
import media from 'styles/media';
import { TinyLoading } from '../Loading';

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

const AutosuggestWrapperDiv = styled.div.attrs(classNames)`
  display: flex;
  align-items: center;
    .${classNames.container} {
      position: relative;
      /* background-color: ${colors.green}; */

      align-self: center;
    }
    .${classNames.input} {
      width: 100%;
      height: 24px;
      padding: 10px 10px;
      /* font-family: Helvetica, sans-serif; */
      /* font-weight: 300; */
      font-size: 1em;
      border: 1px solid ${props => props.theme.border};
      box-shadow: 0px 2px 8px 0.5px ${props => props.theme.border};
      border-radius: 2px;
      background-image: url(${searchIconSvg});
      background-repeat: no-repeat;
      background-position: center right 10px;
      background-size: 1em;

      ${media.desktop`
        /* width: 140px; */
      `};
      ${media.desktopLarge`
        width: 171px;
      `};
    }
    .${classNames.input_focused} {
      outline: none;
      background-image: none;
    }

    .${classNames.input_open} {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    .${classNames.container_open} {
      display: block;
      position: absolute;
      /* top: 51px; */
      width: 100%;
      max-height: 200px;
      overflow-y: auto;
      border: 1px solid ${props => props.theme.border};
      border-top: 0;
      /* border-radius: 1em; */
      background-color: ${props => props.theme.componentBackground};
      font-family: Helvetica, sans-serif;
      font-weight: 300;
      font-size: 1em;
      border-bottom-left-radius: 2px;
      border-bottom-right-radius: 2px;
      z-index: 2;
      ${media.desktopLarge`
        width: 171px;
      `};
    }
    .${classNames.suggestion_list} {
      margin: 0;
      padding: 0;
      list-style-type: none;
    }
    .${classNames.suggestion} {
      cursor: pointer;
      padding: 10px 20px;
    }
    .${classNames.suggestion_highlighted} {
      background-color: ${props => props.theme.border};
    }
    .${classNames.section_container_first}{
      border-top: 0;
    }
  }
  `;
