import moment from 'moment';

// tslint:disable-next-line:no-namespace
export namespace Utils {
  export function currentYear() {
    return moment()
      .utc()
      .year();
  }
}
