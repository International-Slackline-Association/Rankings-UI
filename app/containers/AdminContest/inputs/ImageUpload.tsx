import * as React from 'react';
import styled from 'styles/styled-components';
import InputWrapper from './Wrapper';
import { FieldProps } from 'formik';
import { ContestFormValues } from '../types';
interface Props {
  fileSelected(file: any): void;
  url?: string;
}

class ImageUpload extends React.PureComponent<
  Props & FieldProps<ContestFormValues>
> {
  private handleImageChange = (e: any) => {
    e.preventDefault();

    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      this.props.form.setFieldValue(
        'profilePictureData',
        reader.result as string,
      );
    };

    reader.readAsDataURL(file);
    // this.props.fileSelected(file);
    // console.log('file: ', file);
    // this.props.field.onChange(e);
    this.props.form.setFieldValue(this.props.field.name, file);
  };
  public render() {
    console.log(this.props);
    const previewSrc =
      this.props.form.values.profilePictureData ||
      this.props.form.values.profileUrl;


    return (
      <Wrapper>
        <span>Profile Picture</span>
        <input type="file" onChange={this.handleImageChange} />

        {previewSrc && (
          <React.Fragment>
            <span>Preview</span>
            <Img src={previewSrc} />
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
