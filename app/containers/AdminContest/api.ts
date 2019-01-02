import {
  getCountrySuggestions,
  APIGetCountrySuggestionsResponse,
} from 'api/rankings/countrySuggestions';

import {
  getContestSuggestions,
  APIGetContestSuggestionsResponse,
} from 'api/contests/suggestions';
import { adminGetContest, APIAdminGetContestResponse } from 'api/admin/contest';
import {
  APIAdminSubmitContestRequest,
  adminSubmitContest,
} from 'api/admin/contest/submit';
import {
  adminSubmitContestPicture,
  APIAdminSubmitContestPictureRequest,
} from 'api/admin/contest/submit_picture';
import {
  adminGetDisciplines,
  APIAdminGetDisciplinesResponse,
} from 'api/admin/contest/disciplines';
import { adminGetCategories, APIAdminGetCategoriesResponse } from 'api/admin/contest/categories';

export async function apiGetContestSuggestions(value: string) {
  const results = await getContestSuggestions(value);
  return results;
}
export { APIGetContestSuggestionsResponse };

export async function apiAdminGetContest(id: string) {
  const results = await adminGetContest(id);
  return results;
}
export { APIAdminGetContestResponse };

export async function apiGetCountrySuggestions(value: string) {
  const results = await getCountrySuggestions(value);
  return results;
}
export { APIGetCountrySuggestionsResponse };

export async function apiSubmitContest(request: APIAdminSubmitContestRequest) {
  return adminSubmitContest(request);
}
export { APIAdminSubmitContestRequest };

export async function apiSubmitContestPicture(
  request: APIAdminSubmitContestPictureRequest,
) {
  return adminSubmitContestPicture(request);
}
export { APIAdminSubmitContestPictureRequest };

export async function apiGetDisciplines() {
  return adminGetDisciplines();
}
export { APIAdminGetDisciplinesResponse };

export async function apiGetCategories() {
  return adminGetCategories();
}
export { APIAdminGetCategoriesResponse };
