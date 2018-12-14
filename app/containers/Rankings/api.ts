import getRankingResults, {
  APIGetRankingsRequest,
  APIRankingsResponse,
} from 'api/rankings/results';

import getRankingCategories, {APIRankingCategoriesResponse} from 'api/rankings/categories';

export async function apiGetRankings(request: APIGetRankingsRequest) {
  const results = await getRankingResults(request);
  return results;
}

export async function apiGetCategories() {
  const results = await getRankingCategories();
  return results;

}

export { APIRankingsResponse, APIGetRankingsRequest, APIRankingCategoriesResponse };
