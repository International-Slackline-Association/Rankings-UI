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
import { ICategory, ICategoryEntity } from '../types';
import SelectOptionContainer from '../Option/SelectOptionContainer';
import CategorySelect from '../CategorySelect';
import DisciplineSelect from './DisciplineSelect';

const InputLabel = IL as any;

interface Props {
  categorySelected(value: string): void;
  type: string;
}

const disciplines: ICategoryEntity = {
  title: 'Discipline',
  options: [
    { value: '1', label: 'A', inlineLevel: 1, isContainerStyle: false },
  ],
  selectedValue: '1',
};

class DisciplineCategory extends React.PureComponent<Props> {
  constructor(props: Props) {
    super(props);
  }

  public render() {
    const category = {
      ...disciplines,
      categorySelected: this.props.categorySelected,
    };
    return <DisciplineSelect category={category} />;
  }
}

export default DisciplineCategory;
