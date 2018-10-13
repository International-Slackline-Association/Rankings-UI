import getRankingResults, { APIGetRankingsRequest, APIRankingsResponse } from 'api/rankings';
import { takeLatest, call, put, select } from 'redux-saga/effects';

export async function apiGetRankings(request: APIGetRankingsRequest) {
  const results: APIRankingsResponse = await getRankingResults(request);
  return results;
}

export { APIRankingsResponse, APIGetRankingsRequest };
