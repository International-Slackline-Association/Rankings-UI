import getAthleteSuggestions, {
  APIGetAthleteSuggestionsResponse,
} from 'api/athlete/suggestions';
import { adminGetAthlete, APIAdminGetAthleteResponse } from 'api/admin/athlete';

export async function apiGetAthleteSuggestions(value: string) {
  const results = await getAthleteSuggestions(value);
  return results;
}
export { APIGetAthleteSuggestionsResponse };

export async function apiAdminGetAthlete(id: string) {
  const results = await adminGetAthlete(id);
  return results;
}
export { APIAdminGetAthleteResponse };
