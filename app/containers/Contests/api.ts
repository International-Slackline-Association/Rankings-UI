import moment from 'moment';
import getContests, { APIGetContestsRequest, APIGetContestsResponse } from 'api/contests/contests';
import { takeLatest, call, put, select } from 'redux-saga/effects';
import { TableItem } from './types';

interface GetContestsResponse {
  items: TableItem[];
  isNextPageAvailable: boolean;
}

export async function apiGetContests(request: APIGetContestsRequest) {
  const result: APIGetContestsResponse = await getContests(request);
  const resp: GetContestsResponse = {
    items: [],
    isNextPageAvailable: result.isNextPageAvailable,
  };
  for (const item of result.items) {
    resp.items.push({
      date: moment.unix(item.date).format('DD/MM/YYYY'),
      discipline: item.disciplines.length > 1 ? 'Multi-Discipline' : item.disciplines[0],
      disciplines: item.disciplines,
      id: item.id,
      location: `${item.city}, ${item.country}`,
      name: item.name,
      prize: item.prize,
      profileUrl: item.profileUrl,
      size: item.size,
    });
  }
  return resp;
}

export { GetContestsResponse, APIGetContestsRequest };
