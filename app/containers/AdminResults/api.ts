import {
  APIAdminSubmitContestResultsRequest,
  adminSubmitContestResults,
} from 'api/admin/results/submit';

export async function apiSubmitContestResults(
  request: APIAdminSubmitContestResultsRequest,
) {
  return adminSubmitContestResults(request);
}
export { APIAdminSubmitContestResultsRequest };
