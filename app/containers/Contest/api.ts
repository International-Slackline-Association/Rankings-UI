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
  const resp: GetContestResponse = {
    contest: {
      date: moment.unix(result.contest.date).format('DD/MM/YYYY'),
      discipline: result.contest.discipline,
      id: result.contest.id,
      location: `${result.contest.city}, ${result.contest.country}`,
      name: result.contest.name,
      prize: result.contest.prize,
      profileUrl: result.contest.profileUrl,
      size: result.contest.size,
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
