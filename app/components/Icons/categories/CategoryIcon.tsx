import * as React from 'react';
import styled from 'styles/styled-components';
import WorldIcon from './WorldIcon';
import DisciplineIcon from './DisciplineIcon';
import YearIcon from './YearIcon';
import PeopleIcon from './PeopleIcon';
import AgeIcon from './AgeIcon';

interface CategoryIconProps {
  readonly type: string;
  readonly value: string;
}

/* tslint:disable:max-line-length */
class CategoryIcon extends React.PureComponent<CategoryIconProps> {
  public render() {
    const type = this.props.type;
    const value = this.props.value;

    return <Wrapper>{renderSwitch(type, value)}</Wrapper>;
  }
}

function renderSwitch(type: string, value: string) {
  switch (type) {
    case 'World':
      return <WorldIcon value={value} />;
    case 'Discipline':
      return <DisciplineIcon value={value} />;
    case 'Year':
      return <YearIcon value={value}/>;
    case 'People':
      return <PeopleIcon value={value}/>;
    case 'Age':
      return <AgeIcon value={value}/>;
    default:
      return <div />;
  }
}

const Wrapper = styled.div`
  max-width: 30px;
  max-height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
`;

export default CategoryIcon;
