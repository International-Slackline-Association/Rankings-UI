import getAthleteSuggestions, {
  APIGetAthleteSuggestionsResponse,
} from 'api/athlete/suggestions';
import { adminGetAthlete, APIAdminGetAthleteResponse } from 'api/admin/athlete';
import {
  getCountrySuggestions,
  APIGetCountrySuggestionsResponse,
} from 'api/rankings/countrySuggestions';
import { AthleteFormValues, Athlete } from './types';
import {
  adminSubmitAthlete,
  APIAdminSubmitAthleteRequest,
} from 'api/admin/athlete/submit';
import {
  APIAdminSubmitAthletePictureRequest,
  adminSubmitAthletePicture,
} from 'api/admin/athlete/submit_picture';

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

export async function apiGetCountrySuggestions(value: string) {
  const results = await getCountrySuggestions(value);
  return results;
}
export { APIGetCountrySuggestionsResponse };

export async function apiSubmitAthlete(request: APIAdminSubmitAthleteRequest) {
  return adminSubmitAthlete(request);
}
export { APIAdminSubmitAthleteRequest };

export async function apiSubmitAthletePicture(
  request: APIAdminSubmitAthletePictureRequest,
) {
  return adminSubmitAthletePicture(request);
}
export { APIAdminSubmitAthletePictureRequest };
