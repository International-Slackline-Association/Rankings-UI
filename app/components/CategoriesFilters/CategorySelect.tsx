import * as React from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  OutlinedInput,
} from '@material-ui/core';
import ReactDOM from 'react-dom';
import SelectOptionContainer from './Option/SelectOptionContainer';
import styled from 'styles/styled-components';

interface Props {
  title: string;
}

interface State {
  title: string;
  labelWidth?: number;
  open: boolean;
}

class CategorySelect extends React.PureComponent<Props, State> {
  private InputLabelRef: any;

  constructor(props) {
    super(props);
    this.state = {
      title: '',
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
    this.setState({ title: value });
    this.changeSelectMenuStatus(false)(undefined);
  };

  private renderValue = (value: string) => {
    return value;
  };

  public render() {
    return (
      <Wrapper>
        <FormControl variant="outlined">
          <InputLabel
            innerRef={this.InputLabelRef}
            htmlFor="outlined-age-native-simple"
          >
            {this.props.title}
          </InputLabel>
          <StyledSelect
            open={this.state.open}
            value={this.state.title}
            onOpen={this.changeSelectMenuStatus(true)}
            onClose={this.changeSelectMenuStatus(false)}
            input={
              // tslint:disable-next-line:jsx-wrap-multiline
              <OutlinedInput
                name={this.props.title}
                labelWidth={this.state.labelWidth!}
                id="outlined-age-native-simple"
              />
            }
            renderValue={this.renderValue}
          >
            <SelectOptionContainer onSelect={this.handleSelect} />
          </StyledSelect>
        </FormControl>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  margin: 0px 16px;
`;

const StyledSelect = styled(Select)`
  && {
    width: 96px;
  }
`;

export default CategorySelect;
