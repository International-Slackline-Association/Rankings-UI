import getRankingResults, { APIGetRankingResultsRequest, APIRankingResultsResponse } from 'api/rankings/results';
import { takeLatest, call, put, select } from 'redux-saga/effects';

export async function apiGetRankings(request: APIGetRankingResultsRequest) {
  const results: APIRankingResultsResponse = await getRankingResults(request);
  return results;
}

export { APIRankingResultsResponse, APIGetRankingResultsRequest };
