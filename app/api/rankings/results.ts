import axios, { dummyResponseConfig } from 'api/axios';
import { AxiosRequestConfig, AxiosResponse } from 'axios';

import mockResponse from './__mocks__/rankings_mock';
import { APIGetRankingResultsRequest, APIRankingResultsResponse } from './types';

const requestURL = '';
const getRankingResults = (request: APIGetRankingResultsRequest): Promise<APIRankingResultsResponse> => {
  return axios.post(requestURL, request, dummyResponseConfig(dummyResponse, 2000)).then(resp => {
    const result = resp.data as APIRankingResultsResponse;
    return result;
  });
};

const dummyResponse = (): AxiosResponse<APIRankingResultsResponse> => {
  return {
    data: mockResponse(),
    status: 200,
    statusText: '',
    config: axios.defaults,
    headers: undefined,
    request: undefined,
  };
};

export { APIGetRankingResultsRequest, APIRankingResultsResponse };
export default getRankingResults;
