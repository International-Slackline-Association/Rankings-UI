
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
  const results = await getAthleteContests(request);
  return results;
}

export { APIGetAthleteContestsRequest };

export async function apiGetCategories() {
  const results = await getAthleteContestsCategories();
  return results;
}

export { APIAthleteContestsCategoriesResponse };
