import moment from 'moment';
import { isNil as _isNil } from 'lodash';

// tslint:disable-next-line:no-namespace
export namespace Utils {
  export function currentYear() {
    return moment()
      .utc()
      .year();
  }

  export function isNil(value: any) {
    return _isNil(value);
  }
}
