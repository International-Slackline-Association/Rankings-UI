import {
  APIAdminSubmitContestResultsRequest,
  adminSubmitContestResults,
} from 'api/admin/results/submit';

import {
  adminGetResults,
  APIAdminGetResultsRequest,
  APIAdminResultsResponse,
} from 'api/admin/results';
import { AthleteFilter } from './types';

export async function apiSubmitContestResults(
  request: APIAdminSubmitContestResultsRequest,
) {
  return adminSubmitContestResults(request);
}
export { APIAdminSubmitContestResultsRequest };

export async function apiGetContestResults(request: APIAdminGetResultsRequest) {
  const results = await adminGetResults(request);
  return results.items.map<AthleteFilter>(i => ({
    orderNumber: i.place,
    selectedValue: { value: i.id, label: `${i.name} ${i.surname}` },
    points: i.points,
  }));
}
export { APIAdminGetResultsRequest, APIAdminResultsResponse };
