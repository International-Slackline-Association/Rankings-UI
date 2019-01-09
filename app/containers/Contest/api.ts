import moment from 'moment';
import {
  getContest,
  APIGetContestRequest,
  APIGetContestResponse,
} from 'api/contests/contest';
import { ContestItem } from './types';
import {
  APIGetContestResultsRequest,
  getContestResults,
  APIContestResultsResponse,
} from 'api/contests/contest-results';

interface GetContestResponse {
  contest: ContestItem;
}

export async function apiGetContest(request: APIGetContestRequest) {
  const result: APIGetContestResponse = await getContest(request);
  if (!result.contest) {
    return result;
  }
  const { city, country, ...rest } = result.contest;
  const resp: GetContestResponse = {
    contest: {
      ...rest,
      location: `${city}, ${country}`,
    },
  };
  return resp;
}

export async function apiGetContestResults(
  request: APIGetContestResultsRequest,
) {
  const results = await getContestResults(request);
  return results;
}
export { GetContestResponse, APIGetContestRequest, APIContestResultsResponse };
