import styled from 'styles/styled-components';

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

export const AutosuggestChildWrapperDiv = styled.div.attrs(classNames)`
  display: flex;
  align-items: center;

  .${classNames.suggestion_list} {
    width: 100%;
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  .${classNames.suggestion} {
    cursor: pointer;
    padding: 10px 20px;
    color: ${props => props.theme.textPrimary};
  }
  .${classNames.suggestion_highlighted} {
    background-color: ${props => props.theme.divider};
  }
`;
