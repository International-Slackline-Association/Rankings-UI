import axios, { dummyResponseConfig } from 'api/axios';
import { AxiosResponse } from 'axios';

import mockResponse from './__mocks__/contest_results_mock';

export interface APIAdminSubmitContestResultsResponse {
  success: boolean;
  errorMessage: string;
}

interface ContestResultsItem {
  readonly contestId: string;
  readonly discipline: number;
  readonly places: Athlete[];
}

interface Athlete {
  athleteId: string;
}

export interface APIAdminSubmitContestResultsRequest {
  results: ContestResultsItem;
}

const requestURL = '';
export const adminSubmitContestResults = async (
  request: APIAdminSubmitContestResultsRequest,
): Promise<APIAdminSubmitContestResultsResponse> => {
  return axios
    .post(requestURL, request, dummyResponseConfig(dummyResponse, 1000))
    .then(resp => {
      const result = resp.data as APIAdminSubmitContestResultsResponse;
      return result;
    });
};

const dummyResponse = (): AxiosResponse<
  APIAdminSubmitContestResultsResponse
> => {
  return {
    data: mockResponse(),
    status: 200,
    statusText: '',
    config: axios.defaults,
    headers: undefined,
    request: undefined,
  };
};
