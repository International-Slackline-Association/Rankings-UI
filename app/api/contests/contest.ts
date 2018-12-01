import axios, { dummyResponseConfig } from 'api/axios';
import { AxiosRequestConfig, AxiosResponse } from 'axios';

import mockResponse from './__mocks__/contest_mock';
import { APIGetContestRequest, APIGetContestResponse } from './types';

const requestURL = '';
const getContest = (
  request: APIGetContestRequest,
): Promise<APIGetContestResponse> => {
  return axios
    .post(requestURL, request, dummyResponseConfig(dummyContestsResponse, 1000))
    .then(resp => {
      const result = resp.data as APIGetContestResponse;
      return result;
    });
};

const dummyContestsResponse = (): AxiosResponse<APIGetContestResponse> => {
  return {
    data: mockResponse(),
    status: 200,
    statusText: '',
    config: axios.defaults,
    headers: undefined,
    request: undefined,
  };
};

export { APIGetContestRequest, APIGetContestResponse };
export default getContest;
