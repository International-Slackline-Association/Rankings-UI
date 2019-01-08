import axios, { axiosConfig, axiosConfigWithAuthToken } from 'api/axios';
import { AxiosResponse } from 'axios';

import mockResponse from './__mocks__/contest_results_mock';

export interface APIAdminSubmitContestResultsResponse {}

interface ContestResultsItem {
  readonly contestId: string;
  readonly discipline: number;
  readonly places: Athlete[];
}

interface Athlete {
  athleteId: string;
  place: number;
}

export interface APIAdminSubmitContestResultsRequest {
  results: ContestResultsItem;
}

const requestURL = 'admin/api/submit/contest/results';
export const adminSubmitContestResults = async (
  request: APIAdminSubmitContestResultsRequest,
): Promise<APIAdminSubmitContestResultsResponse> => {
  const body = request.results;
  return axios
    .post(
      requestURL,
      body,
      axiosConfig(dummyResponse, 1000, false, await axiosConfigWithAuthToken()),
    )
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
