import styled from 'styles/styled-components';
import IconButton from 'components/IconButton';

interface OwnProps {
  inverted: boolean;
}

const CloseButton = styled<OwnProps, any>(IconButton)`
  /* border-radius: 50%; */
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 18px;
  right: 18px;
  color: ${props =>
    props.inverted ? props.theme.textInverted : props.theme.textPrimary};
  background-color: ${props =>
    !props.inverted && props.theme.componentBackgroundInverted};

  @media (hover: hover) {
    &:hover {
      opacity: 1;
    }
  }

  &:active {
    opacity: 0.8;
  }
`;

export default CloseButton;
