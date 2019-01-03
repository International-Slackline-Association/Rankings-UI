import * as React from 'react';
import styled from 'styles/styled-components';
import InputWrapper from './Wrapper';
interface Props {
  fileSelected(file: any): void;
  url?: string;
}

interface State {
  previewSrc: string;
  file: any;
}

class ImageUpload extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      previewSrc: this.props.url || '',
      file: null,
    };
  }

  private handleImageChange = (e: any) => {
    e.preventDefault();

    const reader = new FileReader();
    const file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        previewSrc: reader.result as string,
      });
    };

    reader.readAsDataURL(file);

    this.props.fileSelected(file);
  };
  public render() {
    const previewSrc = this.state.previewSrc || this.props.url;

    return (
      <Wrapper>
        <span>Profile Picture</span>
        <input type="file" onChange={this.handleImageChange} />

        {previewSrc && (
          <React.Fragment>
            <span>Preview</span>
            <Img src={previewSrc} />{' '}
          </React.Fragment>
        )}
      </Wrapper>
    );
  }
}

const Wrapper = styled(InputWrapper)`
  display: flex;
  flex-direction: column;

  & span {
    color: ${props => props.theme.textPrimary};
    margin-bottom: 8px;
  }

  & input {
    margin-bottom: 8px;
  }
`;

const Img = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 50%;
`;

export default ImageUpload;
