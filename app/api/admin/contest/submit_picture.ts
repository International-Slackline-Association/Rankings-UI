import axios, { axiosConfig, axiosConfigWithAuthToken } from 'api/axios';
import { AxiosResponse } from 'axios';

import mockResponse from './__mocks__/submit_contest_mock';

export interface APIAdminSubmitContestPictureResponse {}

export interface APIAdminSubmitContestPictureRequest {
  id: string;
  discipline: number;
  url: string;
}

const requestURL = 'admin/api/submit/contest/picture';
export const adminSubmitContestPicture = async (
  request: APIAdminSubmitContestPictureRequest,
): Promise<APIAdminSubmitContestPictureResponse> => {
  const body = request;
  return axios
    .post(
      requestURL,
      body,
      axiosConfig(
        dummyResponse,
        1000,
        false,
        await axiosConfigWithAuthToken(),
      ),
    )
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
