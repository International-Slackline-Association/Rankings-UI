import * as React from 'react';

interface IconProps {}

/* tslint:disable:max-line-length */
class IconClose extends React.PureComponent<IconProps> {
  public render() {
    return (
      <svg width="100%" height="100%" viewBox="0 0 13 13" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M7.56 6.5l1.768-1.768a.75.75 0 1 0-1.06-1.06L6.5 5.439 4.732 3.672a.75.75 0 1 0-1.06 1.06L5.439 6.5 3.672 8.268a.75.75 0 1 0 1.06 1.06L6.5 7.561l1.768 1.767a.75.75 0 1 0 1.06-1.06L7.561 6.5zm-5.656 4.596a6.5 6.5 0 1 1 9.192-9.192 6.5 6.5 0 0 1-9.192 9.192z"
          fill="currentColor"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}

export default IconClose;
