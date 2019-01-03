import axios, { dummyResponseConfig } from 'api/axios';
import { AxiosResponse } from 'axios';

import mockResponse from './__mocks__/submit_contest_mock';

export interface APIAdminSubmitContestPictureResponse {
  success: boolean;
  errorMessage: string;
}

export interface APIAdminSubmitContestPictureRequest {
  url: string;
}

const requestURL = '';
export const adminSubmitContestPicture = async (
  request: APIAdminSubmitContestPictureRequest,
): Promise<APIAdminSubmitContestPictureResponse> => {
  return axios
    .post(requestURL, request, dummyResponseConfig(dummyResponse, 1000))
    .then(resp => {
      const result = resp.data as APIAdminSubmitContestPictureResponse;
      return result;
    });
};

const dummyResponse = (): AxiosResponse<
  APIAdminSubmitContestPictureResponse
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
