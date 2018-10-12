import axios, { dummyResponseConfig } from 'api/axios';
import { AxiosRequestConfig, AxiosResponse } from 'axios';

import mockResponse from './__mocks__/contests_mock';
import { APIGetContestsRequest, APIGetContestsResponse } from './types';

const requestURL = '';
const getContests = (request: APIGetContestsRequest): Promise<APIGetContestsResponse> => {
  return axios.post(requestURL, request, dummyResponseConfig(dummyResponse, 1000)).then(resp => {
    const result = resp.data as APIGetContestsResponse;
    return result;
  });
};

const dummyResponse = (): AxiosResponse<APIGetContestsResponse> => {
  return {
    data: mockResponse(),
    status: 200,
    statusText: '',
    config: axios.defaults,
    headers: undefined,
    request: undefined,
  };
};

export { APIGetContestsRequest, APIGetContestsResponse };
export default getContests;
