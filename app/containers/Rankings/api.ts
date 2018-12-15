import getRankingResults, {
  APIGetRankingsRequest,
  APIRankingsResponse,
} from 'api/rankings/results';

import getRankingCategories, {
  APIRankingCategoriesResponse,
} from 'api/rankings/categories';
import getAthleteSuggestions, {
  APIGetAthleteSuggestionsResponse,
} from 'api/athlete/suggestions';
import getCountrySuggestions, {
  APIGetCountrySuggestionsResponse,
} from 'api/rankings/countrySuggestions';

export async function apiGetRankings(request: APIGetRankingsRequest) {
  const results = await getRankingResults(request);
  return results;
}

export async function apiGetCategories() {
  const results = await getRankingCategories();
  return results;
}

export async function apiGetAthleteSuggestions(value: string) {
  const results = await getAthleteSuggestions(value);
  return results;
}

export async function apiGetCountrySuggestions(value: string) {
  const results = await getCountrySuggestions(value);
  return results;
}

export {
  APIRankingsResponse,
  APIGetRankingsRequest,
  APIRankingCategoriesResponse,
  APIGetAthleteSuggestionsResponse,
  APIGetCountrySuggestionsResponse,
};
