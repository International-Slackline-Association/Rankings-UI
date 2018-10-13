import moment from 'moment';
import getContest, { APIGetContestRequest, APIGetContestResponse } from 'api/contests/contest';
import { TableItem, ContestItem } from './types';

interface GetContestResponse {
  items: TableItem[];
  contest: ContestItem;
  isNextPageAvailable: boolean;
}

export async function apiGetContest(request: APIGetContestRequest) {
  const result: APIGetContestResponse = await getContest(request);
  const resp: GetContestResponse = {
    contest: {
      date: moment.unix(result.contest.date).format('DD/MM/YYYY'),
      disciplines: result.contest.disciplines,
      id: result.contest.id,
      location: `${result.contest.city}, ${result.contest.country}`,
      name: result.contest.name,
      prize: result.contest.prize,
      profileUrl: result.contest.profileUrl,
      size: result.contest.size,
    },
    items: result.items,
    isNextPageAvailable: result.isNextPageAvailable,
  };
  return resp;
}

export { GetContestResponse, APIGetContestRequest };
