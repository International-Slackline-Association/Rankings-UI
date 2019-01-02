import axios, { dummyResponseConfig } from 'api/axios';
import { AxiosResponse } from 'axios';

import mockResponse from './__mocks__/submit_contest_mock';

export interface APIAdminSubmitContestResponse {
  id: string;
  success: boolean;
  errorMessage: string;
}

interface ContestItem {
  readonly id: string;
  readonly name: string;
  readonly date: string;
  readonly city: string;
  readonly country: string;
  readonly discipline: number;
  readonly contestCategory: number;
  readonly prize: number;
  readonly profileUrl: string;
}

export interface APIAdminSubmitContestRequest {
  contest: ContestItem;
}

const requestURL = '';
export const adminSubmitContest = async (
  request: APIAdminSubmitContestRequest,
): Promise<APIAdminSubmitContestResponse> => {
  return axios
    .post(requestURL, request, dummyResponseConfig(dummyResponse, 1000))
    .then(resp => {
      const result = resp.data as APIAdminSubmitContestResponse;
      return result;
    });
};

const dummyResponse = (): AxiosResponse<APIAdminSubmitContestResponse> => {
  return {
    data: mockResponse(),
    status: 200,
    statusText: '',
    config: axios.defaults,
    headers: undefined,
    request: undefined,
  };
};
