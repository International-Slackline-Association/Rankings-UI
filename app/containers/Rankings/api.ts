import getRankingResults, {
  APIGetRankingsRequest,
  APIRankingsResponse,
} from 'api/rankings';

export async function apiGetRankings(request: APIGetRankingsRequest) {
  const results: APIRankingsResponse = await getRankingResults(request);
  return results;
}

export { APIRankingsResponse, APIGetRankingsRequest };
