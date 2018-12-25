import moment from 'moment';

import {
  getAthlete,
  APIGetAthleteRequest,
  APIGetAthleteResponse,
} from 'api/athlete';

export async function apiGetAthlete(request: APIGetAthleteRequest) {
  const result: APIGetAthleteResponse = await getAthlete(request);
  return result;
}

export { APIGetAthleteRequest, APIGetAthleteResponse };

import {
  APIGetAthleteContestsRequest,
  getAthleteContests,
  APIAthleteContestsResponse,
} from 'api/athlete/athlete-contests';
import { TableItemsResult } from './types';
import {
  getAthleteContestsCategories,
  APIAthleteContestsCategoriesResponse,
} from 'api/athlete/categories';

export async function apiGetAthleteContests(
  request: APIGetAthleteContestsRequest,
): Promise<TableItemsResult> {
  const rsp: APIAthleteContestsResponse = await getAthleteContests(request);
  const result: TableItemsResult = {
    items: rsp.items.map(item => {
      return {
        ...item,
        date: moment.unix(item.date).format('DD/MM/YYYY'),
      };
    }),
    next: rsp.next,
  };
  return result;
}

export { APIGetAthleteContestsRequest };

export async function apiGetCategories() {
  const results = await getAthleteContestsCategories();
  return results;
}

export { APIAthleteContestsCategoriesResponse };
