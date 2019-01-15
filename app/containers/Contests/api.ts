import moment from 'moment';
import {
  getContests,
  APIGetContestsRequest,
  APIGetContestsResponse,
} from 'api/contests/contests';
import { TableItem } from './types';
import {
  getContestSuggestions,
  APIGetContestSuggestionsRequest,
  APIGetContestSuggestionsResponse,
} from 'api/contests/suggestions';
import { getContestsDisciplineCategories } from 'api/contests/discipline-categories';

export async function apiGetContests(request: APIGetContestsRequest) {
  const result: APIGetContestsResponse = await getContests(request);
  return result;
}

export async function apiGetDisciplineCategories() {
  const results = await getContestsDisciplineCategories();
  return results;
}

export async function apiGetContestSuggestions(
  request: APIGetContestSuggestionsRequest,
) {
  const results = await getContestSuggestions(request);
  return results;
}
export { APIGetContestSuggestionsRequest, APIGetContestSuggestionsResponse };
export { APIGetContestsResponse, APIGetContestsRequest };
