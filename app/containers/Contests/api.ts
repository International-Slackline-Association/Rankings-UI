import moment from 'moment';
import {
  getContests,
  APIGetContestsRequest,
  APIGetContestsResponse,
} from 'api/contests/contests';
import { TableItem } from './types';
import { getContestSuggestions } from 'api/contests/suggestions';
import { getContestsCategories } from 'api/contests/categories';

interface GetContestsResponse {
  items: TableItem[];
  next: any;
}

export async function apiGetContests(request: APIGetContestsRequest) {
  const result: APIGetContestsResponse = await getContests(request);
  const resp: GetContestsResponse = {
    items: [],
    next: result.next,
  };
  for (const item of result.items) {
    resp.items.push({
      date: moment.unix(item.date).format('DD/MM/YYYY'),
      discipline: item.discipline,
      id: item.id,
      name: item.name,
      prize: item.prize,
      smallProfileUrl: item.smallProfileUrl,
      size: item.size,
    });
  }
  return resp;
}

export async function apiGetCategories() {
  const results = await getContestsCategories();
  return results;
}

export async function apiGetContestSuggestions(value: string) {
  const results = await getContestSuggestions(value);
  return results;
}

export { GetContestsResponse, APIGetContestsRequest };
