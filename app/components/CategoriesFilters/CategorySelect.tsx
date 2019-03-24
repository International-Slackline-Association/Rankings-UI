import * as React from 'react';
import {
  FormControl,
  InputLabel as IL,
  Select,
  OutlinedInput,
} from '@material-ui/core';
import ReactDOM from 'react-dom';
import SelectOptionContainer from './Option/SelectOptionContainer';
import { ICategory } from './types';
import styled from 'styles/styled-components';
import ToggleSwitchSelect from './Option/ToggleSwitchSelect';

const InputLabel = IL as any;
interface Props {
  category: ICategory;
}

interface State {
  title: string;
  labelWidth?: number;
  open: boolean;
}

class CategorySelect extends React.PureComponent<Props, State> {
  private InputLabelRef: any;

  constructor(props: Props) {
    super(props);
    let title = '';
    const option = this.props.category.options.find(
      x => x.value === this.props.category.selectedValue,
    );
    if (option) {
      title = option.label;
    }
    this.state = {
      title: title,
      labelWidth: 0,
      open: false,
    };
    this.InputLabelRef = React.createRef();
  }
  public componentDidMount() {
    const elem = ReactDOM.findDOMNode(this.InputLabelRef.current) as any;
    if (elem) {
      this.setState({
        labelWidth: elem.offsetWidth,
      });
    }
  }

  private changeSelectMenuStatus = (status: boolean) => event => {
    this.setState({ open: status });
  };

  private handleSelect = (value: string) => {
    this.setSelected(value);
    this.props.category.categorySelected(value);
    this.changeSelectMenuStatus(false)(undefined);
  };

  private setSelected(value: string) {
    const option = this.props.category.options.find(x => x.value === value);
    if (option) {
      this.setState({ title: option.label });
    }
  }
  private renderValue = (value: string) => {
    return value;
  };

  public render() {
    return (
      <Wrapper>
        {this.props.category.title === 'World' ? (
          <ToggleSwitchSelect category={this.props.category} />
        ) : (
          <FormControl variant="outlined">
            <InputLabel
              ref={this.InputLabelRef}
              htmlFor="outlined-age-native-simple"
            >
              {this.props.category.title}
            </InputLabel>
            <StyledSelect
              open={this.state.open}
              value={this.state.title}
              onOpen={this.changeSelectMenuStatus(true)}
              onClose={this.changeSelectMenuStatus(false)}
              input={
                // tslint:disable-next-line:jsx-wrap-multiline
                <OutlinedInput
                  name={this.props.category.title}
                  labelWidth={this.state.labelWidth!}
                  id="outlined-age-native-simple"
                />
              }
              renderValue={this.renderValue}
            >
              <SelectOptionContainer
                categorySelected={this.handleSelect}
                options={this.props.category.options}
                hasIcons={this.props.category.title === 'Discipline'}
              />
            </StyledSelect>
          </FormControl>
        )}
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  margin: 0px 16px;
  align-items: center;
  display: flex;
`;

const CustomSelect = props => <Select {...props} />;

const StyledSelect = styled(CustomSelect)`
  && {
    min-width: 96px;
    height: 40px;
  }
`;

export default CategorySelect;
