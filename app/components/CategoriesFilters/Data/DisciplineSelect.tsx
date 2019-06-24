import * as React from 'react';
import {
  FormControl,
  InputLabel as IL,
  Select,
  OutlinedInput,
} from '@material-ui/core';
import ReactDOM from 'react-dom';
import styled from 'styles/styled-components';
import DisciplineIcon from 'components/Icons/categories/DisciplineIcon';
import CategoryIcon from 'components/Icons/categories/CategoryIcon';
import { ICategory } from '../types';
import SelectOptionContainer from '../Option/SelectOptionContainer';
import CategorySelect from '../CategorySelect';

const InputLabel = IL as any;

interface Props {
  category: ICategory;
}

class DisciplineSelect extends React.PureComponent<Props> {
  constructor(props: Props) {
    super(props);
  }

  public render() {
    return (
      <CategorySelect category={this.props.category} type={'Discipline'} />
    );
  }
}

export default DisciplineSelect;
